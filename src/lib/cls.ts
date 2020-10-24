import observer from './performance';
// import Handler from './handler';
import {HandlerCumstomBehaivor,  HandleCustom, CumulateLayoutShift, HanderPerformanceFn, HandlerMetricsFn, Custom} from '../types/types';
// import handler from './handler';


const CLS = (callback: HandleCustom) => {

    // const handler: (HandlerMetricsFn<CumulateLayoutShift>) = Handler;

    // // hander();
    const handler: HandlerCumstomBehaivor<CumulateLayoutShift> = (arg) => {
        // console.log('6000', arg);
        callback({
            value: String(arg.value),
            name: arg.entryType,
            startTime: String(arg.startTime),
            source: arg.sources.map(v => ({
                    node: v.node.className,
                    type: v.node.nodeName
                })
            )
        })
    }

    observer('layout-shift', handler as HanderPerformanceFn);
}
export default CLS;