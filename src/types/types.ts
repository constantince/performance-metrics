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

export interface HandlerMetrics {
    (type: PerformanceEntry): void
}

export interface HandleCustom {
    (type: Custom): void;
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