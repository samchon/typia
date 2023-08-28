"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$any = void 0;
const _clone_1 = require("./$clone");
const $any = (val) => val !== undefined ? (0, _clone_1.$clone)(val) : undefined;
exports.$any = $any;
