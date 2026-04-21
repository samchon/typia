"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
const typescript_1 = __importDefault(require("typescript"));
const FileTransformer_1 = require("./FileTransformer");
/**
 * TypeScript transformer for typia runtime code generation.
 *
 * `transform` is the entry point for typia's compile-time transformation. It
 * converts `typia.*<T>()` function calls (e.g., `typia.is<User>(data)`) into
 * optimized runtime validation, serialization, or transformation code.
 *
 * The transformer analyzes the generic type parameter `T` at compile time and
 * generates specialized code that performs type checking without runtime
 * reflection. This approach provides both type safety and high performance.
 *
 * **Requirements:**
 *
 * - TypeScript's `strictNullChecks` or `strict` compiler option must be enabled
 * - The transformer must be configured in `tsconfig.json` via ts-patch or
 *   ttypescript
 *
 * **Configuration example (tsconfig.json):**
 *
 * ```json
 * {
 *   "compilerOptions": {
 *     "strict": true,
 *     "plugins": [{ "transform": "typia/lib/transform" }]
 *   }
 * }
 * ```
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param program TypeScript program instance from the compiler
 * @param options Optional transformer configuration (finite, numeric,
 *   functional, undefined)
 * @param extras Diagnostic utilities for error reporting during transformation
 * @returns Transformer factory that processes source files
 */
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
        options: options !== null && options !== void 0 ? options : {},
        extras,
    });
};
exports.transform = transform;
//# sourceMappingURL=transform.js.map