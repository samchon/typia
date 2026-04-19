"use strict";
/* @typia-ttsc-rewritten */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_json_pointer = exports.is_duration = exports.is_url = exports.is_date_time = exports.is_pattern = exports.is_even = exports.is_positive_int = exports.is_short_name = exports.is_ipv4 = exports.is_uuid = exports.is_email = void 0;
const is_email = (input) => ((input) => ("string" === typeof input && new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$").test(input)))(input);
exports.is_email = is_email;
const is_uuid = (input) => ((input) => ("string" === typeof input && new RegExp("^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$").test(input)))(input);
exports.is_uuid = is_uuid;
const is_ipv4 = (input) => ((input) => ("string" === typeof input && new RegExp("^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)$").test(input)))(input);
exports.is_ipv4 = is_ipv4;
const is_short_name = (input) => ((input) => ("string" === typeof input && 2 <= input.length && input.length <= 10))(input);
exports.is_short_name = is_short_name;
const is_positive_int = (input) => ((input) => ("number" === typeof input && Number.isInteger(input) && -2147483648 <= input && input <= 2147483647 && 1 <= input))(input);
exports.is_positive_int = is_positive_int;
const is_even = (input) => ((input) => ("number" === typeof input && input % 2 === 0))(input);
exports.is_even = is_even;
const is_pattern = (input) => ((input) => ("string" === typeof input && new RegExp("^[A-Z][a-z]+$").test(input)))(input);
exports.is_pattern = is_pattern;
const is_date_time = (input) => ((input) => ("string" === typeof input && new RegExp("^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])(T|\\s)([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](?:\\.[0-9]{1,9})?(Z|[+-]([01][0-9]|2[0-3]):[0-5][0-9])$").test(input)))(input);
exports.is_date_time = is_date_time;
const is_url = (input) => ((input) => ("string" === typeof input && new RegExp("^(?:https?|ftp):\\/\\/(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9]+-)*[a-z0-9]+)(?:\\.(?:[a-z0-9]+-)*[a-z0-9]+)*(?:\\.(?:[a-z]{2,})))(?::\\d{2,5})?(?:\\/[^\\s]*)?$").test(input)))(input);
exports.is_url = is_url;
const is_duration = (input) => ((input) => ("string" === typeof input && new RegExp("^P(?!$)((\\d+Y)?(\\d+M)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?|(\\d+W)?)$").test(input)))(input);
exports.is_duration = is_duration;
const is_json_pointer = (input) => ((input) => ("string" === typeof input && new RegExp("^(?:\\/(?:[^~/]|~0|~1)*)*$").test(input)))(input);
exports.is_json_pointer = is_json_pointer;
