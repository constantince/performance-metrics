import observer from './performance';
import { HandleCustom, LargestContentfulPaint, HanderPerformanceFn } from '../types/types';

const LCP = (callback: HandleCustom) => {

    const handler = (arg: LargestContentfulPaint) => {
        console.log('6000 largetst', arg);
        callback({
            name: arg.entryType,
            startTime: String(arg.startTime),
            value: String(arg.loadTime),
            renderTime: String(arg.renderTime),
            element: arg.element?.className,
            size: arg.size
        });
    };

    observer('largest-contentful-paint',  <HanderPerformanceFn>handler);
}
export default LCP;
