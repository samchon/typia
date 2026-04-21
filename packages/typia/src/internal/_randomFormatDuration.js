"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._randomFormatDuration = void 0;
const _randomInteger_1 = require("./_randomInteger");
const _randomFormatDuration = () => {
    const period = durate([
        ["Y", random(0, 100)],
        ["M", random(0, 12)],
        ["D", random(0, 31)],
    ]);
    const time = durate([
        ["H", random(0, 24)],
        ["M", random(0, 60)],
        ["S", random(0, 60)],
    ]);
    if (period.length + time.length === 0)
        return "PT0S";
    return `P${period}${time.length ? "T" : ""}${time}`;
};
exports._randomFormatDuration = _randomFormatDuration;
const durate = (elements) => elements
    .filter(([_unit, value]) => value !== 0)
    .map(([unit, value]) => `${value}${unit}`)
    .join("");
const random = (minimum, maximum) => (0, _randomInteger_1._randomInteger)({
    type: "integer",
    minimum,
    maximum,
});
