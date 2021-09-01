export = CurlHelper;
declare class CurlHelper {
    constructor(config: any, path: any);
    request: any;
    path: any;
    getHeaders(): string;
    getMethod(): string;
    getBody(): string;
    getUrl(): any;
    getBuiltURL(): any;
    generateCommand(): string;
}
