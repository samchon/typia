"use strict";
/* @typia-ttsc-rewritten */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_tree = exports.check_tuple = exports.check_nullable_string = exports.check_string_or_number = exports.check_status = exports.check_point_array = exports.check_string_array = exports.check_nested = exports.check_member = exports.check_point = void 0;
const check_point = (input) => ((input) => ("object" === typeof input && null !== input && false === Array.isArray(input) && "number" === typeof input.x && "number" === typeof input.y))(input);
exports.check_point = check_point;
const check_member = (input) => ((input) => ("object" === typeof input && null !== input && false === Array.isArray(input) && "boolean" === typeof input.active && "number" === typeof input.age && "string" === typeof input.email && "string" === typeof input.id))(input);
exports.check_member = check_member;
const check_nested = (input) => ((input) => ("object" === typeof input && null !== input && false === Array.isArray(input) && ("object" === typeof input.owner && null !== input.owner && false === Array.isArray(input.owner) && "boolean" === typeof input.owner.active && "number" === typeof input.owner.age && "string" === typeof input.owner.email && "string" === typeof input.owner.id) && ("object" === typeof input.point && null !== input.point && false === Array.isArray(input.point) && "number" === typeof input.point.x && "number" === typeof input.point.y)))(input);
exports.check_nested = check_nested;
const check_string_array = (input) => ((input) => Array.isArray(input) && input.every((elem) => "string" === typeof elem))(input);
exports.check_string_array = check_string_array;
const check_point_array = (input) => ((input) => Array.isArray(input) && input.every((elem) => ("object" === typeof elem && null !== elem && false === Array.isArray(elem) && "number" === typeof elem.x && "number" === typeof elem.y)))(input);
exports.check_point_array = check_point_array;
const check_status = (input) => ((input) => ("active" === input || "archived" === input || "pending" === input))(input);
exports.check_status = check_status;
const check_string_or_number = (input) => ((input) => ("number" === typeof input || "string" === typeof input))(input);
exports.check_string_or_number = check_string_or_number;
const check_nullable_string = (input) => ((input) => ("string" === typeof input || null === input))(input);
exports.check_nullable_string = check_nullable_string;
const check_tuple = (input) => ((input) => (Array.isArray(input) && input.length === 3 && "string" === typeof input[0] && "number" === typeof input[1] && "boolean" === typeof input[2]))(input);
exports.check_tuple = check_tuple;
const check_tree = (input) => ((input) => (() => { const __is_0 = (v) => ("object" === typeof v && null !== v && false === Array.isArray(v) && Array.isArray(v.children) && v.children.every((elem) => __is_0(elem)) && "number" === typeof v.value); return __is_0(input); })())(input);
exports.check_tree = check_tree;
