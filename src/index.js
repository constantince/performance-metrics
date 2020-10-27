import FP from './lib/fp';
import FCP from './lib/fcp';
import LCP from './lib/lcp';
import CLS from './lib/cls';
import TTFB from './lib/ttfb';
import TTI from './lib/tti';
import Source from './lib/resource';
FP(function (arg) {
    console.log('5000 fp', arg);
});
FCP(function (arg) {
    console.log('5000 fcp', arg);
});
LCP(function (arg) {
    console.log('5000 lcp', arg);
});
CLS(function (arg) {
    console.log('5000 cls', arg);
});
TTFB(function (arg) {
    console.log('5000 ttfb', arg);
});
Source(/\.gif/, function (arg) {
    console.log('5000 source', arg);
});
// TO be continue
console.log('TTI', TTI({ minValue: 10000 }));
// TTI({minValue: 10000}).then(res => {
//     console.log('this is tti',res);
// });
export default { FP: FP, FCP: FCP, LCP: LCP, CLS: CLS, TTFB: TTFB, Source: Source, TTI: TTI };
/*
import Perf from 'performance-metrics';

const p = new Perf({timeout: 5000});

p.source([xxx.js, xxx.css].then([stat1, stat2]) => {

});

p.use(['tti', 'fp', 'fcp', 'flp', 'fid', 'ttfb']).then(res => {
    res: {
        TTI: {
            value,
            start,

        },
        TTFB: {
            xxxxxxxxx
        }
    }
})


*/ 
