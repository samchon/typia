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
export class TypeGuardError<T = any> extends Error {
  /**
   * Name of the typia method that threw this error.
   *
   * E.g., `"typia.assert"`, `"typia.assertEquals"`, `"typia.assertGuard"`.
   */
  public readonly method: string;

  /**
   * Property path where assertion failed.
   *
   * Uses dot notation for nested properties. Generated assertions start at
   * `$input`; callers constructing the error may omit the path.
   *
   * E.g., `"input.age"`, `"input.profile.email"`, `"input[0].name"`.
   */
  public readonly path: string | undefined;

  /**
   * String representation of expected type.
   *
   * E.g., `"string"`, `"number & ExclusiveMinimum<19>"`, `"{ name: string; age:
   * number }"`.
   */
  public readonly expected: string;

  /**
   * Actual value that failed assertion.
   *
   * The raw value at the error path, useful for debugging.
   */
  public readonly value: unknown;

  /**
   * Optional human-readable error description.
   *
   * Primarily for AI agent libraries or custom validation scenarios needing
   * additional context. Standard assertions rely on `path`, `expected`, and
   * `value` for error reporting.
   */
  public readonly description?: string | undefined;

  /**
   * Phantom property for TypeScript type safety.
   *
   * Not used at runtime—exists only to preserve generic type `T` in the type
   * system. Always `undefined`.
   *
   * @internal
   */
  protected readonly fake_expected_typed_value_?: T | undefined;

  /**
   * Creates a new TypeGuardError instance.
   *
   * @param props Error properties
   */
  public constructor(props: TypeGuardError.IProps) {
    // MESSAGE CONSTRUCTION
    // Use custom message if provided, otherwise generate default format
    super(
      props.message ||
        `Error on ${props.method}(): invalid type${
          props.path ? ` on ${props.path}` : ""
        }, expect to be ${props.expected}`,
    );

    // INHERITANCE POLYFILL
    // Set up prototype for compatibility across different JavaScript environments
    const proto = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, proto);
    else (this as any).__proto__ = proto;

    // ASSIGN MEMBERS
    this.name = "TypeGuardError";
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

/**
 * Properties of {@link TypeGuardError}.
 *
 * @evidence contracts/common.md#principled-implementation The error extends Error and carries the failing method, optional path, expected type text and actual value as readonly fields. A nonempty message overrides the generated text. A nonempty description is retained; when the value is undefined, a supplied description (including an empty one) is retained or a missing-value instruction is generated. The prototype assignment preserves the subclass prototype when a toolchain downlevels `extends Error`.
 * @evidence contracts/common.md#clear-and-simple-design One class with a namespace holding its constructor properties; the generic `T` is carried by a protected phantom member that is marked internal and never assigned.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The phantom member is a type-level device. The constructor changes only its own error instance's prototype to new.target.prototype for downlevel Error subclass compatibility; it does not replace a foreign method, global or prototype.
 * @evidence contracts/common.md#meaningful-documentation The class comment lists the carried fields with examples, each field has its own comment and the phantom and constructor are explained.
 */
export namespace TypeGuardError {
  /**
   * Properties for constructing a TypeGuardError.
   *
   * @evidence contracts/common.md#principled-implementation The record lists exactly what the constructor reads: method, expected and value are required, while path, description and message are optional. A nonempty message overrides the generated text; absence or an empty message uses the default.
   * @evidence contracts/common.md#clear-and-simple-design A flat record in the class namespace used only by the constructor and the factories.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each property has a comment with examples and the meaning of absence.
   */
  export interface IProps {
    /**
     * Name of the typia method that threw the error.
     *
     * E.g., `"typia.assert"`, `"typia.assertEquals"`.
     */
    method: string;

    /**
     * Property path where assertion failed (optional).
     *
     * E.g., `"input.age"`, `"input.profile.email"`.
     */
    path?: undefined | string;

    /**
     * String representation of expected type.
     *
     * E.g., `"string"`, `"number & ExclusiveMinimum<19>"`.
     */
    expected: string;

    /** Actual value that failed assertion. */
    value: unknown;

    /**
     * Optional human-readable error description.
     *
     * For AI agent libraries or custom validation needing additional context.
     */
    description?: string;

    /**
     * Custom error message (optional).
     *
     * If omitted or empty, a default message is generated from other
     * properties.
     */
    message?: undefined | string;
  }
}
