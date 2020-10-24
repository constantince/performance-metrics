import { HandleCustom } from '../types/types';
import observer from './performance';
/**
entryType: "resource"
fetchStart: 1380.1949999760836
initiatorType: "img"
duration: 554.7700000461191,
startTime: 1380.1949999760836
 */
const resource = (reg: RegExp | string, callback :HandleCustom) => {
    const handler = (arg: PerformanceEntry) => {
        const r = new RegExp(reg);
        if(r.test(arg.name)) {
            // callback(arg);
        }

    }

    observer('resource', handler);
}

export default resource;