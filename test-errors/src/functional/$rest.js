"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$rest = void 0;
const $rest = (str) => {
    return str.length === 2 ? "" : "," + str.substring(1, str.length - 1);
};
exports.$rest = $rest;
