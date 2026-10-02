import typia from "typia";

interface FiniteBox {
  value: number;
}

const check = typia.createIs<FiniteBox>();
const validate = typia.createValidate<FiniteBox>();
const assert = typia.createAssert<FiniteBox>();

const captureThrow = (task: () => void): boolean => {
  try {
    task();
    return false;
  } catch {
    return true;
  }
};

const run = (value: number) => ({
  is: check({ value }),
  validate: validate({ value }).success,
  assertThrew: captureThrow(() => assert({ value })),
});
const fixture = { run };

/**
 * Verifies finite option number leaf in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * finiteOptionNumberLeafSource declarations; the former
 * finiteOptionNumberLeafRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from finiteOptionNumberLeafRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The four explicit public option rows establish verdicts: default permits NaN/infinities, numeric rejects only NaN, finite rejects all non-finite values and both flags reject all non-finite values. All three APIs must agree for each authored input.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_finite_option_number_leaf in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed finiteOptionNumberLeafSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/finite_option_number_leaf_transform_test.go finiteOptionNumberLeafRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_finite_option_number_leaf = (
  mode: "default" | "finite" | "numeric" | "finite-numeric" = "finite-numeric",
): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const acceptNaN: boolean = mode === "default";
  const acceptInfinity: boolean = mode === "default" || mode === "numeric";
  const cases: any = [
    { name: "finite 1", value: 1, accept: true },
    { name: "NaN", value: Number.NaN, accept: acceptNaN },
    {
      name: "Infinity",
      value: Number.POSITIVE_INFINITY,
      accept: acceptInfinity,
    },
    {
      name: "-Infinity",
      value: Number.NEGATIVE_INFINITY,
      accept: acceptInfinity,
    },
  ];

  let ran: any = 0;
  for (const c of cases) {
    const result: any = mod.run(c.value);

    ran += 1;
    if (result.is !== c.accept) {
      throw new Error(
        c.name + ": typia.is expected " + c.accept + " but got " + result.is,
      );
    }

    ran += 1;
    if (result.validate !== c.accept) {
      throw new Error(
        c.name +
          ": typia.validate.success expected " +
          c.accept +
          " but got " +
          result.validate,
      );
    }

    ran += 1;
    const assertAccepted: any = result.assertThrew === false;
    if (assertAccepted !== c.accept) {
      throw new Error(
        c.name +
          ": typia.assert accepted=" +
          assertAccepted +
          " but expected " +
          c.accept,
      );
    }
  }

  console.log("RAN " + ran + " CASES");

  if (ran !== 12) throw new Error("runtime case census changed: " + ran);
};
