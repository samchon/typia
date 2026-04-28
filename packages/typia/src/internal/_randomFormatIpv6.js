"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._randomFormatIpv6 = void 0;
const _randomInteger_1 = require("./_randomInteger");
const _randomFormatIpv6 = () => new Array(8).fill(0).map(random).join(":");
exports._randomFormatIpv6 = _randomFormatIpv6;
const random = () => (0, _randomInteger_1._randomInteger)({
    type: "integer",
    minimum: 0,
    maximum: 65_535,
}).toString(16);
