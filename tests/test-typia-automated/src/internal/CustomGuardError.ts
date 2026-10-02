/**
 * Carries the diagnostic supplied to a custom assertion error factory.
 *
 * The exact subclass prototype distinguishes custom-factory binding from the
 * default TypeGuardError path. Diagnostic fields retain the supplied
 * identities.
 *
 * @evidence contracts/testing.md#behavioral-verification Generated custom assertion cases supply this class through the public error-factory argument. Their _test_assert-family helpers require its exact prototype and the authored diagnostic path; this class constructs the observation rather than asserting it.
 * @evidence contracts/testing.md#independent-expectations The product supplies diagnostic props, while fixture spoilers independently establish allowed paths. Error prototype identity is compared directly by isErrorClass; the generated diagnostic-property validator remains a correlated native check.
 * @evidence contracts/testing.md#distinguishing-cases The constructor uses a nonempty supplied message or formats method/path/expected, retains undefined optional path and arbitrary value identity, and restores the actual subclass prototype. Custom and default error callbacks execute in their separately named generated families.
 * @evidence contracts/testing.md#execution-ownership TestAutomationController.writeScript imports this class and supplies new CustomGuardError through direct/factory custom callbacks. Assertion helpers own the exact-prototype/path checks; the constructor has no independent case registration.
 */
export class CustomGuardError extends Error {
  /** Public assertion operation that rejected the value. */
  public readonly method: string;

  /** Authored diagnostic location, absent when no path was supplied. */
  public readonly path: string | undefined;

  /** Required type description retained for diagnostic-property checks. */
  public readonly expected: string;

  /** Original invalid value, retained without cloning or coercion. */
  public readonly value: any;

  public constructor(props: CustomGuardError.IProps) {
    // MESSAGE CONSTRUCTION
    super(
      props.message ||
        `Error on ${props.method}(): invalid type${
          props.path ? ` on ${props.path}` : ""
        }, expect to be ${props.expected}`,
    );

    // INHERITANCE POLYFILL
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
/**
 * Defines the diagnostic input accepted by the custom error fixture.
 *
 * @evidence contracts/testing.md#behavioral-verification IProps supplies diagnostic values to the error constructor; the namespace executes no assertion. Generated custom assertion helpers observe the constructed error's prototype and properties.
 * @evidence contracts/testing.md#independent-expectations The shape follows the public TypeGuardError diagnostic input, including optional path/message and unmodified value. Fixture spoilers establish paths independently of constructed error output.
 * @evidence contracts/testing.md#distinguishing-cases Required method/expected/value and optional path/message retain absence versus present diagnostic input. This representation does not itself exercise runtime input variants.
 * @evidence contracts/testing.md#execution-ownership The constructor consumes IProps and generated custom error callbacks construct it; _test_assert-family helper executions own their separate named failures.
 */
export namespace CustomGuardError {
  /**
   * Diagnostic properties supplied to the custom error fixture constructor.
   *
   * @evidence contracts/testing.md#behavioral-verification The input shape preserves fields subsequently observed by custom assertion helpers; it contains no acceptance or expected-output computation.
   * @evidence contracts/testing.md#independent-expectations Its fields match the public assertion error-factory input. Authored spoiler paths and direct prototype identity checks supply test expectations rather than this type certifying product diagnostics.
   * @evidence contracts/testing.md#distinguishing-cases Optional path/message admit omitted diagnostics; required method/expected/value retain operation, expected type and original invalid value. A nonempty message overrides constructor formatting.
   * @evidence contracts/testing.md#execution-ownership CustomGuardError's constructor consumes the shape in actual generated custom error factories. The enclosing namespace owns no independently registered test.
   */
  export interface IProps {
    method: string;
    path?: undefined | string;
    expected: string;
    value: any;
    message?: undefined | string;
  }
}
