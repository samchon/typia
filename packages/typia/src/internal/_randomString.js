"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._randomString = void 0;
const _randomInteger_1 = require("./_randomInteger");
const _randomString = (props) => {
    const length = (0, _randomInteger_1._randomInteger)({
        type: "integer",
        minimum: (props.minLength ?? 0),
        maximum: props.maxLength,
    });
    return new Array(length)
        .fill(0)
        .map(() => ALPHABETS[random()])
        .join("");
};
exports._randomString = _randomString;
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
const random = () => (0, _randomInteger_1._randomInteger)({
    type: "integer",
    minimum: 0,
    maximum: ALPHABETS.length - 1,
});
