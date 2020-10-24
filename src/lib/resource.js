import observer from './performance';
/**
entryType: "resource"
fetchStart: 1380.1949999760836
initiatorType: "img"
duration: 554.7700000461191,
startTime: 1380.1949999760836
 */
var resource = function (reg, callback) {
    var handler = function (arg) {
        var r = new RegExp(reg);
        if (r.test(arg.name)) {
            // callback(arg);
        }
    };
    observer('resource', handler);
};
export default resource;
