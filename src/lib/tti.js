// import {getFirstConsistentlyInteractive} from "tti-polyfill";
var TTI = function (opts) {
    console.log('this is s');
    // console.log('-----------', getFirstConsistentlyInteractive);
    // return getFirstConsistentlyInteractive(opts);
    // // return new Promise((reslove, reject) => {
    // // const timing = performance.timing;
    // let timer: undefined | number;
    // // console.log('5000 tti', arg);
    // let fcpStartTime: string | undefined;
    // //get first 
    // FCP((args) => {
    //     fcpStartTime = args.startTime;
    // });
    // const resetTimer = (point: number) => {
    //     clearTimeout(timer);
    //     timer = setTimeout(() => {
    //         console.log(point);
    //         callback({
    //             name: 'tti',
    //             value: String(point) + '-' + fcpStartTime
    //         });
    //     }, QuiteTime)
    // }
    // let longtaskEndTime: number;
    // observer("longtask", (args) => {
    //     longtaskEndTime = args.startTime + args.duration;
    //     resetTimer(longtaskEndTime);
    //     /* args;
    //         duration: 157.08000003360212
    //         entryType: "longtask"
    //         name: "self"
    //         startTime: 175.1149999909103
    //     */
    // });
    // observer('resource', (args) => {
    //     if(/syt-base\.js/.test(args.name))
    //         console.log('sources is', args)
    // });
    // });
};
export default TTI;
