import observer from './performance';
import FPC from './fcp';
//no long task and less than two in-flight network request;
var QuiteTime = 5000;
var TTI = function (callback) {
    var timing = performance.timing;
    // console.log('5000 tti', arg);
    var fcpStartTime;
    //get first 
    FPC(function (args) {
        fcpStartTime = args.startTime;
    });
    var longtaskEndTime;
    observer("longtask", function (args) {
        longtaskEndTime = args.startTime + args.duration;
        /* args;
            duration: 157.08000003360212
            entryType: "longtask"
            name: "self"
            startTime: 175.1149999909103
        */
    });
    var handler = function (arg) {
    };
    return new Promise(function () {
        //reslove(callback);
    });
};
export default TTI;
