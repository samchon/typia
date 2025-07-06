/**
 * Custom error class thrown when runtime assertion fails in `typia.assert<T>()` function.
 *
 * This error is thrown by the `typia.assert<T>()` function when the input value
 * doesn't match the expected type.
 *
 * The error provides detailed information about the first assertion failure encountered,
 * including the access path where the error occurred, the expected type, and the actual value.
 *
 * @template T - The expected type (generic for type safety)
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 * ```typescript
 * interface IMember {
 *   name: string;
 *   age: number & ExclusiveMinimum<19>;
 * }
 *
 * try {
 *   typia.assert<IMember>({ name: "John", age: 18 });
 * } catch (error) {
 *   if (error instanceof TypeGuardError) {
 *     console.log(error.method);   // "typia.assert"
 *     console.log(error.path);     // "input.age"
 *     console.log(error.expected); // "number & ExclusiveMinimum<19>"
 *     console.log(error.value);    // 18
 *   }
 * }
 * ```
 */
export class TypeGuardError<T = any> extends Error {
  /**
   * The name of the typia method that threw this error.
   *
   * @example "typia.assert"
   */
  public readonly method: string;

  /**
   * The access path to the property where the assertion error occurred.
   *
   * Uses dot notation to indicate the path for nested object properties.
   * May be `undefined` if the error occurred at the root level.
   *
   * @example
   * - `"input.age"` - Error in the age property of the object
   * - `"input.profile.email"` - Error in the email property of a nested object
   * - `"input[0].name"` - Error in the name property of the first array element
   * - `undefined` - Error occurred at the root level
   */
  public readonly path: string | undefined;

  /**
   * String representation of the expected type at the error location.
   *
   * Represents TypeScript types as strings, including detailed type information
   * for complex types.
   *
   * @example
   * - `"string"` - Expected string type
   * - `"number & ExclusiveMinimum<19>"` - Expected number greater than 19
   * - `"undefined"` - Expected undefined (when superfluous property found in assertion)
   * - `"{ name: string; age: number }"` - Expected object type
   */
  public readonly expected: string;

  /**
   * The actual value that failed assertion.
   *
   * Stores the actual value at the error path as-is.
   * Useful for debugging by comparing the expected type with the actual value.
   *
   * @example
   * - `18` - Numeric value
   * - `"invalid"` - String value
   * - `{ name: "John", age: 18, sex: 1 }` - Object value
   */
  public readonly value: unknown;

  /**
   * Phantom property for type safety purposes.
   *
   * This property is not actually used and exists only to maintain
   * the generic type T in TypeScript's type system.
   * Always has an `undefined` value at runtime.
   *
   * @internal
   */
  protected readonly fake_expected_typed_value_?: T | undefined;

  /**
   * Creates a new TypeGuardError instance.
   *
   * @param props - Object containing the properties needed to create the error
   *
   * @example
   * ```typescript
   * const error = new TypeGuardError({
   *   method: "typia.assert",
   *   path: "input.age",
   *   expected: "number & ExclusiveMinimum<19>",
   *   value: 18
   * });
   * ```
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
  }
}

export namespace TypeGuardError {
  /**
   * Interface for properties passed to the TypeGuardError constructor.
   *
   * @example
   * ```typescript
   * const props: TypeGuardError.IProps = {
   *   method: "typia.assertEquals",
   *   path: "input.sex",
   *   expected: "undefined",
   *   value: 1,
   *   message: "Custom error message" // optional
   * };
   * ```
   */
  export interface IProps {
    /**
     * The name of the typia method that threw the error.
     *
     * @example "typia.assert", "typia.assertEquals"
     */
    method: string;

    /**
     * The access path to the property where the assertion error occurred (optional).
     *
     * @example "input.age", "input.profile.email"
     */
    path?: undefined | string;

    /**
     * String representation of the expected type at the error location.
     *
     * @example "string", "number & ExclusiveMinimum<19>"
     */
    expected: string;

    /**
     * The actual value that failed assertion.
     */
    value: unknown;

    /**
     * Custom error message (optional).
     *
     * If not provided, a default format message will be automatically generated.
     */
    message?: undefined | string;
  }
}
