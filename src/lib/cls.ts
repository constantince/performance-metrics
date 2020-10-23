import observer from './performance';
import { HandleCustom, CumulateLayoutShift, HandlerMetrics} from '../types/types';

const CLS = (callback: HandleCustom) => {
    const handler = (arg: CumulateLayoutShift) => {
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

    observer('layout-shift', <HandlerMetrics>handler);
}
export default CLS;