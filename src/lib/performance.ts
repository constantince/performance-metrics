import { HandlerMetrics } from '../types/types';

const observer = (type: string, callback: HandlerMetrics): PerformanceObserver | undefined => {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(type)) {
            
            const observer: PerformanceObserver = new PerformanceObserver(list => {
                list.getEntries().forEach(callback);
            });

            observer.observe({ entryTypes: [type] });

            return observer;
        }
    }catch (ex) {
        return undefined;
    }
}


export default observer;