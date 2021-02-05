import observer from './performance';
var LCP = function (callback) {
    var handler = function (arg) {
        var _a;
        console.log('6000 largetst', arg);
        callback({
            name: arg.entryType,
            startTime: String(arg.startTime),
            value: String(arg.loadTime),
            renderTime: String(arg.renderTime),
            element: (_a = arg.element) === null || _a === void 0 ? void 0 : _a.className,
            size: arg.size
        });
    };
    observer('largest-contentful-paint', handler);
};
export default LCP;
