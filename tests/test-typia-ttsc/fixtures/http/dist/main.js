"use strict";
/* @typia-ttsc-rewritten */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIntParam = exports.parseQuery = void 0;
const parseQuery = (input) => ((input) => { const __get = (k) => { if (!input) return undefined; if (typeof input.get === "function") return input.get(k); return input[k]; }; const __getAll = (k) => { if (!input) return []; if (typeof input.getAll === "function") return input.getAll(k); const v = input[k]; if (Array.isArray(v)) return v; return v === undefined ? [] : [v]; }; const out = {}; { const v = __get("page"); if (v == null) throw new Error("typia.http.query: missing page"); out["page"] = Number(v); } { const v = __get("size"); if (v == null) throw new Error("typia.http.query: missing size"); out["size"] = Number(v); } { const v = __get("sort"); if (v != null) out["sort"] = String(v); } out["tag"] = __getAll("tag").map((v) => String(v)); return out; })(input);
exports.parseQuery = parseQuery;
const parseIntParam = (input) => ((input) => Number(input))(input);
exports.parseIntParam = parseIntParam;
