"use strict";
/* @typia-ttsc-rewritten */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneMember = exports.pruneMember = exports.toCamel = exports.schemaName = exports.statuses = void 0;
exports.statuses = ((["active","archived","pending"]));
exports.schemaName = ("Member");
const toCamel = (input) => (((__rename) => (input) => { const __walk = (v) => { if (Array.isArray(v)) return v.map(__walk); if (v && typeof v === "object") { const out = {}; for (const k of Object.keys(v)) out[__rename(k)] = __walk(v[k]); return out; } return v; }; return __walk(input); })(((s) => s.replace(/[_\-\s]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, c => c.toLowerCase()))))(input);
exports.toCamel = toCamel;
const pruneMember = (input) => ((input) => { const __allow = new Set(["id","name"]); for (const __k of Object.keys(input)) { if (!__allow.has(__k)) delete input[__k]; } return input; })(input);
exports.pruneMember = pruneMember;
const cloneMember = (input) => ((input) => JSON.parse(JSON.stringify(input)))(input);
exports.cloneMember = cloneMember;
