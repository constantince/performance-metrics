var observer = function (type, callback) {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(type)) {
            var observer_1 = new PerformanceObserver(function (list) {
                list.getEntries().forEach(callback);
            });
            observer_1.observe({ entryTypes: [type] });
            return observer_1;
        }
    }
    catch (ex) {
        return undefined;
    }
};
export default observer;
