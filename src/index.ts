import FP from './lib/fp';
import FCP from './lib/fcp';
import LCP from './lib/lcp';
import CLS from './lib/cls';
import TTFB from './lib/ttfb';
import TTI from './lib/tti';
import Source from './lib/resource';

FP((arg) => {
    console.log('5000 fp',arg);
});

FCP((arg) => {
    console.log('5000 fcp',arg);
});

LCP((arg) => {
    console.log('5000 lcp',arg);
});

CLS((arg) => {
    console.log('5000 cls', arg)
});

TTFB((arg) => {
    console.log('5000 ttfb', arg);
});

Source(/\.gif/, (arg) => {
    console.log('5000 source', arg);
});
// TO be continue
TTI(arg => {
    console.log('5000 tti',arg);
});



export default { FP, FCP, LCP, CLS, TTFB, Source, TTI };

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