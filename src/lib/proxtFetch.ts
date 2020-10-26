let uniqueId: number = 0;
let sequence: Map<number, string> = new Map();
const beforeXHRSendCb = (reqId: number) => {
    sequence.set(reqId, 'fetch-start');
    console.log('现存长度：', calculateSeque());
}

const onRequestCompletedCb = (reqId: number) => {
    sequence.delete(reqId);
    console.log('现存长度：', calculateSeque());
}

const calculateSeque = () => {
    return [...sequence].length;
}

const proxyFetch = () => {
    const send = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function(...args) { // No arrow function.
      const requestId = uniqueId++;
      beforeXHRSendCb(requestId);
      this.addEventListener('readystatechange', () => {
        // readyState 4 corresponds to 'DONE'
        if (this.readyState === 4) onRequestCompletedCb(requestId);
      });
      return send.apply(this, args);
    };
}

export default proxyFetch;