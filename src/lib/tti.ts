import observer from './performance';
import { HandleCustom, HandlerCumstomBehaivor, HanderPerformanceFn, TimeToFirstByte } from '../types/types';
import FPC from './fcp';
import Reource from './resource'
import { resolveModuleName } from '../../node_modules/typescript/lib/typescript';

//no long task and less than two in-flight network request;
const QuiteTime = 5000;

const TTI = (callback: HandleCustom) => {
    const timing = performance.timing;

    // console.log('5000 tti', arg);
    let fcpStartTime: string | undefined;
    //get first 
    FPC((args) => {
        fcpStartTime = args.startTime;
    });

    let longtaskEndTime: number;
    observer("longtask", (args) => {

        longtaskEndTime = args.startTime + args.duration;

        /* args;
            duration: 157.08000003360212
            entryType: "longtask"
            name: "self"
            startTime: 175.1149999909103
        */


    });

    const handler: HandlerCumstomBehaivor<TimeToFirstByte> = (arg) => {
       

        
    }

    return new Promise(() => {
        //reslove(callback);
    })


    
}

export default TTI;