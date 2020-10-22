import FP from './lib/fp';
import FCP from './lib/fcp';
import LCP from './lib/lcp';
import CLS from './lib/cls';

FP((arg) => {
    console.log('5000',arg);
});

FCP((arg) => {
    console.log('5000',arg);
});

LCP((arg) => {
    console.log('5000',arg);
});

CLS((arg) => {
    console.log('500', arg)
})



export default { FP };

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