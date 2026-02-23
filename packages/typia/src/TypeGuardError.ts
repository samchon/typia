/**
<<<<<<< HEAD
 * Custom error class thrown when runtime assertion fails in `typia.assert<T>()`
 * function.
 *
 * This error is thrown by the `typia.assert<T>()` function when the input value
 * doesn't match the expected type.
 *
 * The error provides detailed information about the first assertion failure
 * encountered, including the access path where the error occurred, the expected
 * type, and the actual value.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   ```typescript
 *   interface IMember {
 *     name: string;
 *     age: number & ExclusiveMinimum<19>;
 *   }
 *
 *   try {
 *     typia.assert<IMember>({ name: "John", age: 18 });
 *   } catch (error) {
 *     if (error instanceof TypeGuardError) {
 *       console.log(error.method);   // "typia.assert"
 *       console.log(error.path);     // "input.age"
 *       console.log(error.expected); // "number & ExclusiveMinimum<19>"
 *       console.log(error.value);    // 18
 *     }
 *   }
 *   ```;
 *
 * @template T - The expected type (generic for type safety)
 */
export class TypeGuardError<T = any> extends Error {
  /**
   * The name of the typia method that threw this error.
   *
   * @example
   *   typia.assert;
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  public readonly method: string;

  /**
<<<<<<< HEAD
   * The access path to the property where the assertion error occurred.
   *
   * Uses dot notation to indicate the path for nested object properties. May be
   * `undefined` if the error occurred at the root level.
   *
   * @example
   *   - `"input.age"` - Error in the age property of the object
   *   - `"input.profile.email"` - Error in the email property of a nested object
   *   - `"input[0].name"` - Error in the name property of the first array element
   *   - `undefined` - Error occurred at the root level
=======
   * Property path where assertion failed.
   *
   * Uses dot notation for nested properties. `undefined` if error occurred at
   * root level.
   *
   * E.g., `"input.age"`, `"input.profile.email"`, `"input[0].name"`.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  public readonly path: string | undefined;

  /**
<<<<<<< HEAD
   * String representation of the expected type at the error location.
   *
   * Represents TypeScript types as strings, including detailed type information
   * for complex types.
   *
   * @example
   *   - `"string"` - Expected string type
   *   - `"number & ExclusiveMinimum<19>"` - Expected number greater than 19
   *   - `"undefined"` - Expected undefined (when superfluous property found in assertion)
   *   - `"{ name: string; age: number }"` - Expected object type
=======
   * String representation of expected type.
   *
   * E.g., `"string"`, `"number & ExclusiveMinimum<19>"`, `"{ name: string; age:
   * number }"`.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  public readonly expected: string;

  /**
<<<<<<< HEAD
   * The actual value that failed assertion.
   *
   * Stores the actual value at the error path as-is. Useful for debugging by
   * comparing the expected type with the actual value.
   *
   * @example
   *   - `18` - Numeric value
   *   - `"invalid"` - String value
   *   - `{ name: "John", age: 18, sex: 1 }` - Object value
=======
   * Actual value that failed assertion.
   *
   * The raw value at the error path, useful for debugging.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  public readonly value: unknown;

  /**
<<<<<<< HEAD
   * Optional human-readable description of the type guard error
   *
   * This field is rarely populated in standard typia type assertion and is
   * primarily intended for specialized AI agent libraries or custom validation
   * scenarios that require additional context beyond the technical type
   * information. Most assertion errors rely solely on the path, expected, and
   * value fields for comprehensive error reporting.
=======
   * Optional human-readable error description.
   *
   * Primarily for AI agent libraries or custom validation scenarios needing
   * additional context. Standard assertions rely on `path`, `expected`, and
   * `value` for error reporting.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  public readonly description?: string | undefined;

  /**
<<<<<<< HEAD
   * Phantom property for type safety purposes.
   *
   * This property is not actually used and exists only to maintain the generic
   * type T in TypeScript's type system. Always has an `undefined` value at
   * runtime.
=======
   * Phantom property for TypeScript type safety.
   *
   * Not used at runtime—exists only to preserve generic type `T` in the type
   * system. Always `undefined`.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   *
   * @internal
   */
  protected readonly fake_expected_typed_value_?: T | undefined;

  /**
   * Creates a new TypeGuardError instance.
   *
<<<<<<< HEAD
   * @example
   *   ```typescript
   *   const error = new TypeGuardError({
   *     method: "typia.assert",
   *     path: "input.age",
   *     expected: "number & ExclusiveMinimum<19>",
   *     value: 18
   *   });
   *   ```;
   *
   * @param props - Object containing the properties needed to create the error
=======
   * @param props Error properties
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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

export namespace TypeGuardError {
<<<<<<< HEAD
  /**
   * Interface for properties passed to the TypeGuardError constructor.
   *
   * @example
   *   ```typescript
   *   const props: TypeGuardError.IProps = {
   *     method: "typia.assertEquals",
   *     path: "input.sex",
   *     expected: "undefined",
   *     value: 1,
   *     message: "Custom error message" // optional
   *   };
   *   ```;
   */
  export interface IProps {
    /**
     * The name of the typia method that threw the error.
     *
     * @example
     *   typia.assert, "typia.assertEquals";
=======
  /** Properties for constructing a TypeGuardError. */
  export interface IProps {
    /**
     * Name of the typia method that threw the error.
     *
     * E.g., `"typia.assert"`, `"typia.assertEquals"`.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    method: string;

    /**
<<<<<<< HEAD
     * The access path to the property where the assertion error occurred
     * (optional).
     *
     * @example
     *   input.age, "input.profile.email";
=======
     * Property path where assertion failed (optional).
     *
     * E.g., `"input.age"`, `"input.profile.email"`.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    path?: undefined | string;

    /**
<<<<<<< HEAD
     * String representation of the expected type at the error location.
     *
     * @example
     *   string, "number & ExclusiveMinimum<19>";
     */
    expected: string;

    /** The actual value that failed assertion. */
    value: unknown;

    /**
     * Optional human-readable description of the type guard error
     *
     * This field is rarely populated in standard typia type assertion and is
     * primarily intended for specialized AI agent libraries or custom
     * validation scenarios that require additional context beyond the technical
     * type information. Most assertion errors rely solely on the path,
     * expected, and value fields for comprehensive error reporting.
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    description?: string;

    /**
     * Custom error message (optional).
     *
<<<<<<< HEAD
     * If not provided, a default format message will be automatically
     * generated.
=======
     * If not provided, a default message is generated from other properties.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
     */
    message?: undefined | string;
  }
}
