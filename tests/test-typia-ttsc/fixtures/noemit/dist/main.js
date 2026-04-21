"use strict";
/* @typia-ttsc-rewritten */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
const check = (input) => ((input) => "string" === typeof input)(input);
exports.check = check;
if (require.main === module) {
    process.stdout.write(JSON.stringify({
        argv: process.argv.slice(2),
        bad: (0, exports.check)(1),
        ok: (0, exports.check)("ok"),
    }));
}
