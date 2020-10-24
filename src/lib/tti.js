var onLoad = function (callback) {
    if (document.readyState === 'complete') {
        setTimeout(callback, 0);
    }
    else {
        document.addEventListener('pageShow', callback);
    }
};
var TTI = function (callback) {
    var timing = performance.timing;
    onLoad(function () {
        callback({
            value: String(timing.responseStart - timing.navigationStart),
            name: 'time-to-first-byte'
        });
    });
};
export default TTI;
