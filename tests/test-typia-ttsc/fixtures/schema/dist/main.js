"use strict";
/* @typia-ttsc-rewritten */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringSchema = exports.memberSchema = void 0;
exports.memberSchema = (({"components":{},"schema":{"additionalProperties":false,"properties":{"age":{"minimum":0,"type":"number"},"email":{"format":"email","type":"string"},"id":{"type":"string"}},"required":["age","email","id"],"type":"object"},"version":"3.1"}));
exports.stringSchema = (({"components":{},"schema":{"type":"string"},"version":"3.1"}));
