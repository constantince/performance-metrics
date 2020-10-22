import observer from './performance';
import { HandleCustom, LargestContentfulPaint, HandlerMetrics } from '../types/types';

const LCP = (callback: HandleCustom) => {

    const hander = (arg: LargestContentfulPaint) => {
        console.log('6000', arg)
        callback({
            name: arg.entryType,
            value: String(arg.startTime),
            startTime: 'fdfd',
            element: arg.element
        });
    };

    observer('largest-contentful-paint',  <HandlerMetrics>hander);
}
export default LCP;
