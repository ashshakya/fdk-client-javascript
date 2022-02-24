const datefns = require('date-fns');
const log = require('loglevel');
const packageJSON = require('../../package.json');

const now = new Date();

function setLoggerLevel(level) {
    log.setLevel(level);
}

function Logger(data) {
    const { level, message, ...others } = data;

    if(level === 'TRACE') {
        log.trace(JSON.stringify({level: level, detail: message, ...others, time: getDateTime(), version: getPackageVersion()}))
    }

    if(level === 'DEBUG') {
        log.debug(JSON.stringify({level: level, detail: message, ...others, time: getDateTime(), version: getPackageVersion()}))
    }

    if(level === 'INFO') {
        log.info(JSON.stringify({level: level, detail: message, ...others, time: getDateTime(), version: getPackageVersion()}))
    }

    if(level === 'WARN') {
        log.warn(JSON.stringify({level: level, detail: message, ...others, time: getDateTime(), version: getPackageVersion()}))
    }

    if(level === 'ERROR') {
        log.error(JSON.stringify({level: level, detail: message, ...others, time: getDateTime(), version: getPackageVersion()}))
    }
}

const getDateTime = (format = "dd-MM-yyyy'T'hh:mm:ss") => datefns.format(now, format.toString());

const getPackageVersion = () => packageJSON.version;

module.exports = {
    Logger,
    setLoggerLevel
}