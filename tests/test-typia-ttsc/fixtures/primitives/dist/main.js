"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_any = exports.check_bigint = exports.check_boolean = exports.check_number = exports.check_string = void 0;
const typia_1 = __importDefault(require("typia"));
const check_string = (input) => ((input) => "string" === typeof input)(input);
exports.check_string = check_string;
const check_number = (input) => ((input) => "number" === typeof input)(input);
exports.check_number = check_number;
const check_boolean = (input) => ((input) => "boolean" === typeof input)(input);
exports.check_boolean = check_boolean;
const check_bigint = (input) => ((input) => "bigint" === typeof input)(input);
exports.check_bigint = check_bigint;
const check_any = (input) => ((input) => true)(input);
exports.check_any = check_any;
