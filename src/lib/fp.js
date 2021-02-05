import observer from './performance';
var FP = function (callback, t) {
    observer('paint', function (arg) {
        console.log('6000', arg);
        t = t || 'first-paint';
        if (arg.name === t) {
            var customData = {
                name: arg.name,
                value: String(arg.duration),
                startTime: String(arg.startTime)
            };
            callback(customData);
        }
    });
};
export default FP;
