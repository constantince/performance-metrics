import observer from './performance';
import { HandlerMetricsFn, HandleCustom } from '../types/types';
const onLoad = (callback: () => void) => {
    if (document.readyState === 'complete') {
        setTimeout(callback, 0);
    } else {
        document.addEventListener('pageShow', callback);
    }
}

const TTI = (callback: HandleCustom) => {
    const timing = performance.timing;
    onLoad(() => {
        callback({
            value: String(timing.responseStart - timing.navigationStart),
            name: 'time-to-first-byte'
        });
    })
}

export default TTI;