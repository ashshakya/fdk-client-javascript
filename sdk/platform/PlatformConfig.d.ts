export = PlatformConfig;
declare class PlatformConfig {
    /**
     * @param {Object} config
     * @param {string} config.companyId
     * @param {string} config.domain
     * @param {string} config.apiKey
     * @param {string} config.apiSecret
     */
    constructor(config: {
        companyId: string;
        domain: string;
        apiKey: string;
        apiSecret: string;
    });
    companyId: string;
    domain: string;
    apiKey: string;
    apiSecret: string;
    printCurl: any;
    oauthClient: OauthClient;
    getAccessToken(): Promise<any>;
}
import OauthClient = require("./OAuthClient");
