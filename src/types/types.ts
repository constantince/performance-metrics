export interface Metrics {

    entries: PerformanceEntry[];
}

export interface Custom {
    value: string, 
    name: string,
    startTime: string,
    element?: HTMLElement
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
}

export interface CumulateLayoutShift  extends LargestContentfulPaint {
    sources: []
}   