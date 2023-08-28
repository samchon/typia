"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
const typescript_1 = __importDefault(require("typescript"));
const FileTransformer_1 = require("./transformers/FileTransformer");
const transform = (program, options, extras) => {
    const compilerOptions = program.getCompilerOptions();
    const strict = compilerOptions.strictNullChecks !== undefined
        ? !!compilerOptions.strictNullChecks
        : !!compilerOptions.strict;
    if (strict === false)
        extras.addDiagnostic({
            category: typescript_1.default.DiagnosticCategory.Error,
            code: "(typia)",
            file: undefined,
            start: undefined,
            length: undefined,
            messageText: "strict mode is required.",
        });
    return FileTransformer_1.FileTransformer.transform({
        program,
        compilerOptions,
        checker: program.getTypeChecker(),
        printer: typescript_1.default.createPrinter(),
        options: options ?? {},
        extras,
    });
};
exports.transform = transform;
exports.default = exports.transform;
