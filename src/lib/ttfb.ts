import observer from './performance';
// import Handler from './handler';
import { HandleCustom, PerformanceTimingKeys} from '../types/types';
// import handler from './handler';
const afterLoad = (callback: () => void) => {
    if(document.readyState === 'complete') {
        callback()
    } else {
        window.addEventListener('pageshow', callback);
    }
}

const TTFB = (callback: HandleCustom) => {

    // const handler: (HandlerMetricsFn<CumulateLayoutShift>) = Handler;
    afterLoad(() => {
        const timing: PerformanceTiming = window.performance.timing;
        for (const key in timing) {
            if (key !== 'navigationStart' && key !== 'toJSON') {
              console.log('ttfb', key, Math.max(
                timing[key as PerformanceTimingKeys] - timing.navigationStart, 0));
            }
          }
        console.log('ttfb', timing)
        callback({
            value: String(timing.responseStart - timing.requestStart),
            name: 'time-to-fisrt-byte',
        });

    })
    // // hander();
    // const handler =  (arg: CumulateLayoutShift) => {
    //     // console.log('6000', arg);
    //     callback({
    //         value: String(arg.value),
    //         name: arg.entryType,
    //         startTime: String(arg.startTime),
    //         source: arg.sources.map(v => ({
    //                 node: v.node.className,
    //                 type: v.node.nodeName
    //             })
    //         )
    //     })
    // }

    // observer('layout-shift', <HanderPerformanceFn>handler);
}
export default TTFB;