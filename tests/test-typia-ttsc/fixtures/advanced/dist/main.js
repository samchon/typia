"use strict";
/* @typia-ttsc-rewritten */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDeep = exports.isLevels = exports.isPicked = exports.isPartial = exports.isShape = void 0;
const isShape = (x) => ((input) => (("object" === typeof input && null !== input && false === Array.isArray(input) && "circle" === input.kind && "number" === typeof input.radius) || ("object" === typeof input && null !== input && false === Array.isArray(input) && "number" === typeof input.base && "number" === typeof input.height && "triangle" === input.kind) || ("object" === typeof input && null !== input && false === Array.isArray(input) && "square" === input.kind && "number" === typeof input.side)))(x);
exports.isShape = isShape;
const isPartial = (x) => ((input) => ("object" === typeof input && null !== input && false === Array.isArray(input) && ("string" === typeof input.id || undefined === input.id) && ("string" === typeof input.name || undefined === input.name) && ("number" === typeof input.score || undefined === input.score)))(x);
exports.isPartial = isPartial;
const isPicked = (x) => ((input) => ("object" === typeof input && null !== input && false === Array.isArray(input) && "string" === typeof input.id && "string" === typeof input.name))(x);
exports.isPicked = isPicked;
const isLevels = (x) => ((input) => Array.isArray(input) && input.every((elem) => ("high" === elem || "low" === elem || "medium" === elem)))(x);
exports.isLevels = isLevels;
const isDeep = (x) => ((input) => ("object" === typeof input && null !== input && false === Array.isArray(input) && (("object" === typeof input.a && null !== input.a && false === Array.isArray(input.a) && (("object" === typeof input.a.b && null !== input.a.b && false === Array.isArray(input.a.b) && ("string" === typeof input.a.b.c || undefined === input.a.b.c)) || undefined === input.a.b)) || undefined === input.a)))(x);
exports.isDeep = isDeep;
