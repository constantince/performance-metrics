var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var uniqueId = 0;
var sequence = new Map();
var beforeXHRSendCb = function (reqId) {
    sequence.set(reqId, 'fetch-start');
    console.log('现存长度：', calculateSeque());
};
var onRequestCompletedCb = function (reqId) {
    sequence.delete(reqId);
    console.log('现存长度：', calculateSeque());
};
var calculateSeque = function () {
    return __spread(sequence).length;
};
var proxyFetch = function () {
    var send = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var requestId = uniqueId++;
        beforeXHRSendCb(requestId);
        this.addEventListener('readystatechange', function () {
            // readyState 4 corresponds to 'DONE'
            if (_this.readyState === 4)
                onRequestCompletedCb(requestId);
        });
        return send.apply(this, args);
    };
};
export default proxyFetch;
