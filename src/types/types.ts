export interface Metrics {
    entries: PerformanceEntry[];
}

export interface CumulateCoutomSource {
    node: string,
    type: string
}

export interface Custom {
    value: string; 
    name: string;
    startTime?: string;
    renderTime?: string;
    element?: string;
    size?: number;
    source?: CumulateCoutomSource[];
}

export type HanderPerformanceFn = HandlerCumstomBehaivor<PerformanceEntry>;

export type HandleCustom = HandlerCumstomBehaivor<Custom>;

// export interface HandlerMetricsFn<T> {
//     (type: T): void
// }

export type HandlerCumstomBehaivor<T> = {
    (arg: T) : void
} 



export interface LargestContentfulPaint extends PerformanceEntry {
    element: HTMLElement;
    size: number;
    renderTime: number;
    value: string;
    loadTime: number;
}

export interface CumulateLayoutShift  extends LargestContentfulPaint {
    sources: [{
        node: HTMLElement
    }]
}

export interface TimeToFirstByte extends PerformanceEntry {
    name: string,
    value: number
}

export interface TTFBContent {
    loadPage: number;
    domReady: number;
    redirect: number;
    lookupDomain: number;
    ttfb: number;
    request: number;
    loadEvent: number;
    appcache: number;
    connect: number;
    unloadEvent: number;
}

export type PerformanceTimingKeys =
    'connectEnd' |
    'connectStart' |
    'domComplete' |
    'domContentLoadedEventEnd' |
    'domContentLoadedEventStart' |
    'domInteractive' |
    'domainLookupEnd' |
    'domainLookupStart' |
    'fetchStart' |
    'loadEventEnd' |
    'loadEventStart' |
    'redirectEnd' |
    'redirectStart' |
    'requestStart' |
    'responseEnd' |
    'responseStart' |
    'secureConnectionStart' |
    'unloadEventEnd' |
    'unloadEventStart' |
    'navigationStart';
