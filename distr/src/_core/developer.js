"use strict";
/*
    Developer Utilities
*/
Object.defineProperty(exports, "__esModule", { value: true });
/// Let current Function Sleep For A Period of <ms> miliseconds
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.sleep = sleep;
//# sourceMappingURL=developer.js.map