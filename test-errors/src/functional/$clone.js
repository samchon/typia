"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$clone = void 0;
const $clone = (value) => JSON.parse(JSON.stringify(value));
exports.$clone = $clone;
