"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._randomFormatIpv4 = void 0;
const _randomInteger_1 = require("./_randomInteger");
const _randomFormatIpv4 = () => new Array(4).fill(0).map(random).join(".");
exports._randomFormatIpv4 = _randomFormatIpv4;
const random = () => (0, _randomInteger_1._randomInteger)({
    type: "integer",
    minimum: 0,
    maximum: 255,
});
