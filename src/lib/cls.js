import observer from './performance';
// import handler from './handler';
var CLS = function (callback) {
    // const handler: (HandlerMetricsFn<CumulateLayoutShift>) = Handler;
    // // hander();
    var handler = function (arg) {
        // console.log('6000', arg);
        callback({
            value: String(arg.value),
            name: arg.entryType,
            startTime: String(arg.startTime),
            source: arg.sources.map(function (v) { return ({
                node: v.node.className,
                type: v.node.nodeName
            }); })
        });
    };
    observer('layout-shift', handler);
};
export default CLS;
