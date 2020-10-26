import observer from './performance';
import FCP from './fcp';
import proxyFetch from './proxtFetch';
//no long task and less than two in-flight network request;
var QuiteTime = 5000;
proxyFetch();
var TTI = function (callback) {
    // return new Promise((reslove, reject) => {
    // const timing = performance.timing;
    var timer;
    // console.log('5000 tti', arg);
    var fcpStartTime;
    //get first 
    FCP(function (args) {
        fcpStartTime = args.startTime;
    });
    var resetTimer = function (point) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            console.log(point);
            callback({
                name: 'tti',
                value: String(point) + '-' + fcpStartTime
            });
        }, QuiteTime);
    };
    var longtaskEndTime;
    observer("longtask", function (args) {
        longtaskEndTime = args.startTime + args.duration;
        resetTimer(longtaskEndTime);
        /* args;
            duration: 157.08000003360212
            entryType: "longtask"
            name: "self"
            startTime: 175.1149999909103
        */
    });
    observer('resource', function (args) {
        if (/syt-base\.js/.test(args.name))
            console.log('sources is', args);
    });
    // });
};
export default TTI;
