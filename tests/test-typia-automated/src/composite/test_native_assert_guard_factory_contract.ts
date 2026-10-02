import typia, { AssertionGuard, TypeGuardError } from "typia";

interface User {
  id: number;
}

const custom = (props: TypeGuardError.IProps): Error =>
  Object.assign(new Error("custom guard"), props);

const guard: AssertionGuard<User> = typia.createAssertGuard<User>(custom);
const equalsGuard: AssertionGuard<User> =
  typia.createAssertGuardEquals<User>(custom);
const inferred = typia.createAssertGuard<User>();
const inferredEquals = typia.createAssertGuardEquals<User>();

let input: unknown = { id: 1 };
const returned = guard(input);

// Narrowing is asserted inside a function body: TypeScript does not apply an
// assertion signature to a module-scoped binding, so the same lines at the top
// level leave the value unknown.
const narrowing = (value: unknown): number => {
  guard(value);
  return value.id;
};

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;
type Guard = (
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
) => asserts input is User;
/**
 * Pins inferred assertion-factory and invocation-result types at compilation.
 *
 * @evidence contracts/testing.md#behavioral-verification Assert/Equal reject a factory return type that differs from the handwritten assertion guard signature, or an invocation result that differs from void. The runtime case separately checks acceptance, custom-error rejection and surplus-key strictness.
 * @evidence contracts/testing.md#independent-expectations Guard explicitly declares the public asserts-input-is-User signature and optional error factory; void follows the documented guard invocation contract. These expectations do not use emitted native JavaScript.
 * @evidence contracts/testing.md#distinguishing-cases Both ordinary/equality factory inference and invocation void are checked. The neighboring @ts-expect-error assignment rejects treating an invoked guard as another guard; narrowing's value.id access checks the assertion effect inside a function.
 * @evidence contracts/testing.md#execution-ownership The automated and default-profile consumer projects compile this exported tuple and its private Assert/Equal/Guard/narrowing premises before the matching runtime case executes. No independent DynamicExecutor registration is attached to the type.
 */
export type FactoryCases = [
  Assert<Equal<typeof inferred, Guard>>,
  Assert<Equal<typeof inferredEquals, Guard>>,
  Assert<Equal<typeof returned, void>>,
];

// @ts-expect-error invoking an assertion guard returns void, not another guard.
const nested: AssertionGuard<User> = guard(input);
void nested;
const fixture = { guard, equalsGuard, inferred, inferredEquals, narrowing };

/**
 * Verifies assert guard factory contract in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original assertGuardFactorySource
 * declarations; the former assertGuardFactoryRuntime observations execute in
 * the existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: normal success returns void;
 * equals success returns void; normal permits surplus.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from assertGuardFactoryRuntime; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The public guard contract returns undefined on acceptance and calls the supplied error factory on rejection. Numeric id, wrong id type and surplus-key equality distinguish these outcomes without another generated validator as oracle.
 * @evidence contracts/testing.md#distinguishing-cases Ordinary/equality guards return undefined on clean numeric id. Ordinary guard permits a surplus key; both reject a string id and equality guard rejects the surplus key, each through the supplied custom-error message. FactoryCases, narrowing and the @ts-expect-error assignment preserve compile-time assertion signatures and the void invocation distinction.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_assert_guard_factory_contract in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed assertGuardFactorySource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/assert_guard_factory_contract_test.go assertGuardFactoryRuntime inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_assert_guard_factory_contract = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const expect: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected)
      throw new Error(label + ": expected " + expected + ", got " + actual);
  };

  expect("normal success returns void", mod.guard({ id: 1 }), undefined);
  expect("equals success returns void", mod.equalsGuard({ id: 1 }), undefined);
  expect(
    "normal permits surplus",
    mod.guard({ id: 1, extra: true }),
    undefined,
  );

  for (const [label, guard, value] of [
    ["normal invalid", mod.guard, { id: "bad" }],
    ["equals invalid", mod.equalsGuard, { id: "bad" }],
    ["equals surplus", mod.equalsGuard, { id: 1, extra: true }],
  ]) {
    let error: any;
    try {
      guard(value);
    } catch (exp: any) {
      error = exp;
    }
    expect(
      label + " uses custom error",
      error && error.message,
      "custom guard",
    );
  }
};
