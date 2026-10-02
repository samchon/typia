import typia, { TypeGuardError } from "typia";

interface User {
  id: number;
}

const assertUser = typia.createAssert<User>();
const assertUserEquals = typia.createAssertEquals<User>();
const withOverride = (
  input: unknown,
  errorFactory: (props: TypeGuardError.IProps) => Error,
): User => assertUser(input, errorFactory);
const fixture = { assertUser, assertUserEquals, withOverride };

/**
 * Verifies create assert error factory arity in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * createAssertErrorFactoryRuntimeSource declarations; the former
 * createAssertErrorFactoryRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: valid input passes; index ; index ; index ;
 * call-time factory message; call-time factory path.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from createAssertErrorFactoryRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The asserted id type determines number, $input.id and the documented createAssert method. Non-callable Array.map indices must retain ordinary errors; a real call-time factory must retain its authored message and path.
 * @evidence contracts/testing.md#distinguishing-cases Preserves valid input passes; index ; index ; index ; call-time factory message; call-time factory path; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_create_assert_error_factory_arity in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed createAssertErrorFactoryRuntimeSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/create_assert_error_factory_arity_test.go createAssertErrorFactoryRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_create_assert_error_factory_arity = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const expect: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected)
      throw new Error(label + ": expected " + expected + ", got " + actual);
  };

  const capture: any = (task: any): any => {
    try {
      task();
    } catch (exp: any) {
      return exp;
    }
    throw new Error("expected the assertion to throw");
  };

  expect("valid input passes", 1, mod.assertUser({ id: 1 }).id);

  // A pointwise hand-off fills errorFactory with the element index. Both the
  // falsy 0 and a truthy index must reach the ordinary type-guard error.
  for (const index of [0, 1, 2]) {
    const error: any = capture((): any => mod.assertUser({ id: "bad" }, index));
    expect("index " + index + " expected", "number", error.expected);
    expect("index " + index + " path", "$input.id", error.path);
    expect("index " + index + " method", "typia.createAssert", error.method);
  }

  // The declared parameter is real: a callable factory still wins.
  const custom: any = capture((): any =>
    mod.withOverride({ id: "bad" }, (props: any): any =>
      Object.assign(new Error("call-time"), props),
    ),
  );
  expect("call-time factory message", "call-time", custom.message);
  expect("call-time factory path", "$input.id", custom.path);

  const equals: any = capture((): any =>
    mod.assertUserEquals({ id: 1, extra: true }, 4),
  );
  expect("equals surplus expected", "undefined", equals.expected);
};
