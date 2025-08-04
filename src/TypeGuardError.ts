/**
 * Error thrown when runtime validation fails with detailed diagnostic information.
 *
 * When typia's validation functions detect type mismatches, they throw this error 
 * containing precise details about what went wrong and where. Much more helpful 
 * than generic "validation failed" messages - you get the exact path, expected 
 * type, and actual value.
 *
 * Perfect for debugging API responses, user input validation, or any runtime 
 * type checking scenario where you need to know exactly what's broken.
 *
 * @example
 * ```typescript
 * interface User { name: string; age: number; }
 * 
 * try {
 *   typia.assert<User>({ name: "John", age: "not-a-number" });
 * } catch (error) {
 *   if (error instanceof TypeGuardError) {
 *     console.log(error.path);     // "input.age"
 *     console.log(error.expected); // "number"
 *     console.log(error.value);    // "not-a-number"
 *   }
 * }
 * ```
 *
 * @template T Expected type for better type safety
 */
export class TypeGuardError<T = any> extends Error {
  /**
   * Which typia function threw this error.
   */
  public readonly method: string;

  /**
   * Dot-notation path to where the validation failed.
   * 
   * Shows exactly which property caused the error in nested objects.
   * Undefined for root-level failures.
   */
  public readonly path: string | undefined;

  /**
   * What type was expected at the failure location.
   * 
   * Human-readable representation of the TypeScript type.
   */
  public readonly expected: string;

  /**
   * The actual value that failed validation.
   * 
   * Useful for debugging what you actually got vs what you expected.
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
   * Creates a detailed validation error.
   *
   * @param props Error details including method, path, expected type, and actual value
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
