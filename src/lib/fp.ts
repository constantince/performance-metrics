import observer from './performance';
import { HandleCustom } from '../types/types';

const FP = (callback: HandleCustom, t?: string) => {
    observer('paint', (arg: PerformanceEntry) => {
        t = t || 'first-paint';
        if(arg.name === t) {
            const customData = {
                name: arg.name,
                value: String(arg.duration),
                startTime: String(arg.startTime)
            }
            callback(customData);
        }
    })
}

export default FP;