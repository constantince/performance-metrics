import observer from './performance';
var LCP = function (callback) {
    var handler = function (arg) {
        console.log('6000 largetst', arg);
        callback({
            name: arg.entryType,
            startTime: String(arg.startTime),
            value: String(arg.loadTime),
            renderTime: String(arg.renderTime),
            element: arg.element.className,
            size: arg.size
        });
    };
    observer('largest-contentful-paint', handler);
};
export default LCP;
