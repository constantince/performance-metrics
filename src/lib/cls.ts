import observer from './performance';
import { HandleCustom, CumulateLayoutShift, HandlerMetrics} from '../types/types';

const CLS = (callback: HandleCustom) => {
    const handler = (arg: CumulateLayoutShift) => {
        console.log('6000', arg.sources);
    }

    observer('layout-shift', <HandlerMetrics>handler);
}
export default CLS;