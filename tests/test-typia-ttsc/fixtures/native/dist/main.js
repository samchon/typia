"use strict";
/* @typia-ttsc-rewritten */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSet = exports.isMap = exports.isUint8 = exports.isDate = void 0;
const isDate = (x) => ((input) => input instanceof Date)(x);
exports.isDate = isDate;
const isUint8 = (x) => ((input) => input instanceof Uint8Array)(x);
exports.isUint8 = isUint8;
const isMap = (x) => ((input) => input instanceof Map)(x);
exports.isMap = isMap;
const isSet = (x) => ((input) => input instanceof Set)(x);
exports.isSet = isSet;
