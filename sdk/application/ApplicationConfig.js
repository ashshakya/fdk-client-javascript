const { FDKInvalidCredentialError } = require('../common/FDKError')
const log = require('loglevel');
class ApplicationConfig {

    /**
     * @param  {object} _conf
     * @param  {object} [_opts]
     */
    constructor(_conf, _opts) {
        this.applicationID = _conf.applicationID || "";
        this.applicationToken = _conf.applicationToken || "";
        this.opts = _opts || {};
        this.domain = _conf.domain || 'https://api.fynd.com';
        this.logLevel = _conf.logLevel || "SILENT";
        this.setLogLevel();
        this.validate();
        this.cookie;
    }

    setCookie(cookie){
        this.cookie = cookie;
    }

    setLogLevel() {
        log.setLevel(this.logLevel);
    }

    validate() {
        if (!this.applicationID) {
            log.error("No Application ID Present");
            throw new FDKInvalidCredentialError("No Application ID Present");
        }
        if (!this.applicationToken) {
            log.error("No Application Token Present");
            throw new FDKInvalidCredentialError("No Application Token Present");
        }
        if (this.applicationToken.length < 5) {
            log.error("Invalid Application Token");
            throw new FDKInvalidCredentialError("Invalid Application Token");
        }
    }

}


module.exports = ApplicationConfig;