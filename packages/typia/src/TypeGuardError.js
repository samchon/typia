"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeGuardError = void 0;
/**
 * Error thrown when type assertion fails.
 *
 * Thrown by {@link assert}, {@link assertGuard}, and other assert-family
 * functions when input doesn't match expected type `T`. Contains detailed
 * information about the first assertion failure:
 *
 * - `method`: Which typia function threw (e.g., `"typia.assert"`)
 * - `path`: Property path where error occurred (e.g., `"input.user.age"`)
 * - `expected`: Expected type string (e.g., `"number & ExclusiveMinimum<19>"`)
 * - `value`: Actual value that failed validation
 *
 * @template T Expected type (for type safety)
 */
class TypeGuardError extends Error {
    /**
     * Name of the typia method that threw this error.
     *
     * E.g., `"typia.assert"`, `"typia.assertEquals"`, `"typia.assertGuard"`.
     */
    method;
    /**
     * Property path where assertion failed.
     *
     * Uses dot notation for nested properties. `undefined` if error occurred at
     * root level.
     *
     * E.g., `"input.age"`, `"input.profile.email"`, `"input[0].name"`.
     */
    path;
    /**
     * String representation of expected type.
     *
     * E.g., `"string"`, `"number & ExclusiveMinimum<19>"`, `"{ name: string; age:
     * number }"`.
     */
    expected;
    /**
     * Actual value that failed assertion.
     *
     * The raw value at the error path, useful for debugging.
     */
    value;
    /**
     * Optional human-readable error description.
     *
     * Primarily for AI agent libraries or custom validation scenarios needing
     * additional context. Standard assertions rely on `path`, `expected`, and
     * `value` for error reporting.
     */
    description;
    /**
     * Phantom property for TypeScript type safety.
     *
     * Not used at runtime—exists only to preserve generic type `T` in the type
     * system. Always `undefined`.
     *
     * @internal
     */
    fake_expected_typed_value_;
    /**
     * Creates a new TypeGuardError instance.
     *
     * @param props Error properties
     */
    constructor(props) {
        // MESSAGE CONSTRUCTION
        // Use custom message if provided, otherwise generate default format
        super(props.message ||
            `Error on ${props.method}(): invalid type${props.path ? ` on ${props.path}` : ""}, expect to be ${props.expected}`);
        // INHERITANCE POLYFILL
        // Set up prototype for compatibility across different JavaScript environments
        const proto = new.target.prototype;
        if (Object.setPrototypeOf)
            Object.setPrototypeOf(this, proto);
        else
            this.__proto__ = proto;
        // ASSIGN MEMBERS
        this.method = props.method;
        this.path = props.path;
        this.expected = props.expected;
        this.value = props.value;
        if (props.description || props.value === undefined)
            this.description =
                props.description ??
                    [
                        "The value at this path is `undefined`.",
                        "",
                        `Please fill the \`${props.expected}\` typed value next time.`,
                    ].join("\n");
    }
}
exports.TypeGuardError = TypeGuardError;
