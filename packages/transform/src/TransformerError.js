"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformerError = void 0;
const utils_1 = require("@typia/utils");
/**
 * Error thrown during typia transformation.
 *
 * `TransformerError` is thrown when `typia.*<T>()` receives unsupported types
 * or invalid configurations at compile time. The error message details which
 * types failed and why.
 *
 * Common causes:
 *
 * - Tuples in LLM schema (not supported by most LLMs)
 * - Recursive types without `$ref` support
 * - `any` types without explicit handling
 * - Native classes not serializable to JSON
 *
 * Use {@link from} to create from {@link MetadataFactory.IError} instances.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
class TransformerError extends Error {
    constructor(props) {
        super(props.message);
        this.code = props.code;
        // INHERITANCE POLYFILL
        const proto = new.target.prototype;
        if (Object.setPrototypeOf)
            Object.setPrototypeOf(this, proto);
        else
            this.__proto__ = proto;
    }
}
exports.TransformerError = TransformerError;
(function (TransformerError) {
    /**
     * Create error from metadata factory errors.
     *
     * Formats multiple type errors into a single TransformerError.
     */
    TransformerError.from = (props) => {
        const body = props.errors
            .map((e) => {
            const subject = e.explore.object === null
                ? ""
                : join(e.explore.object)(e.explore.property);
            const middle = e.explore.parameter
                ? `(parameter: ${JSON.stringify(e.explore.parameter)})`
                : e.explore.output
                    ? "(return type)"
                    : "";
            const type = `${subject.length ? `${subject}: ` : ""}${e.name}`;
            return `- ${type}${middle}\n${e.messages
                .map((msg) => `  - ${msg}`)
                .join("\n")}`;
        })
            .join("\n\n");
        return new TransformerError({
            code: props.code,
            message: `unsupported type detected\n\n${body}`,
        });
    };
    const join = (object) => (key) => {
        if (key === null)
            return object.name;
        else if (typeof key === "object")
            return `${object.name}[key]`;
        else if (utils_1.NamingConvention.variable(key))
            return `${object.name}.${key}`;
        return `${object.name}[${JSON.stringify(key)}]`;
    };
})(TransformerError || (exports.TransformerError = TransformerError = {}));
//# sourceMappingURL=TransformerError.js.map