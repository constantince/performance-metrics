export interface Metrics {
    value: string;

    startTime: string;

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