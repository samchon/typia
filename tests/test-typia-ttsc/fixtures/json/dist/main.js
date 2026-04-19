"use strict";
/* @typia-ttsc-rewritten */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse_member_maybe = exports.parse_point = exports.stringify_array = exports.stringify_member = exports.stringify_point = exports.stringify_string = exports.stringify_number = void 0;
const stringify_number = (input) => ((input) => (Number.isFinite(input) ? String(input) : "null"))(input);
exports.stringify_number = stringify_number;
const stringify_string = (input) => ((input) => JSON.stringify(input))(input);
exports.stringify_string = stringify_string;
const stringify_point = (input) => ((input) => "{"+"\"x\":"+((Number.isFinite(input.x) ? String(input.x) : "null"))+","+"\"y\":"+((Number.isFinite(input.y) ? String(input.y) : "null"))+"}")(input);
exports.stringify_point = stringify_point;
const stringify_member = (input) => ((input) => "{"+"\"active\":"+(((input.active) ? "true" : "false"))+","+"\"id\":"+(JSON.stringify(input.id))+","+"\"name\":"+(JSON.stringify(input.name))+"}")(input);
exports.stringify_member = stringify_member;
const stringify_array = (input) => ((input) => ("[" + input.map((elem) => (Number.isFinite(elem) ? String(elem) : "null")).join(",") + "]"))(input);
exports.stringify_array = stringify_array;
const parse_point = (input) => ((input) => ((input) => (("object" === typeof input && null !== input && false === Array.isArray(input) && "number" === typeof input.x && "number" === typeof input.y)) ? input : (() => { const __err = new Error("typia.assert: expected Point, got " + typeof input + " " + JSON.stringify(input)); __err.name = "TypeGuardError"; throw __err; })())(JSON.parse(input)))(input);
exports.parse_point = parse_point;
const parse_member_maybe = (input) => ((input) => { const __parsed = JSON.parse(input); return (((input) => ("object" === typeof input && null !== input && false === Array.isArray(input) && "boolean" === typeof input.active && "string" === typeof input.id && "string" === typeof input.name))(__parsed)) ? __parsed : null; })(input);
exports.parse_member_maybe = parse_member_maybe;
