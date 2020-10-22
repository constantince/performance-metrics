import Perf from './lib/performance';
import FP from './lib/fp';
import FCP from './lib/fcp';

FP((arg) => {
    console.log(arg);
});

FCP((arg) => {
    console.log(arg);
});



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