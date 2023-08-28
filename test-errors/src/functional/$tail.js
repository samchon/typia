"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$tail = void 0;
/**
 * @internal
 */
const $tail = (str) => str[str.length - 1] === "," ? str.substring(0, str.length - 1) : str;
exports.$tail = $tail;
