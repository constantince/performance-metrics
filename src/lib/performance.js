var Observer = function (type, callback) {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(type)) {
            var observer = new PerformanceObserver(function (list) {
                list.getEntries().forEach(callback);
            });
            observer.observe({ entryTypes: [type] });
            return observer;
        }
    }
    catch (ex) {
        return undefined;
    }
};
export default Observer;
