import typia from "typia";

// 2**53 + 1 is the smallest integer a double cannot represent; rounding it
// lands on 2**53, the value each validator below must reject.
const isUnsafe = typia.createIs<9007199254740993n>();
const isInt64Max = typia.createIs<9223372036854775807n>();
const isInt64Min = typia.createIs<-9223372036854775808n>();
const isUnion = typia.createIs<9007199254740993n | 9007199254740995n>();
const isSafe = typia.createIs<2n>();
const fixture = { isUnsafe, isInt64Max, isInt64Min, isUnion, isSafe };

/**
 * Verifies bigint literal precision in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * bigintLiteralPrecisionSource declarations; the former
 * bigintLiteralPrecisionRunner observations execute in the existing automated
 * worker. This detects a generated program whose output compiles but changes
 * these runtime decisions: isUnsafe(exact); isUnsafe(rounded);
 * isInt64Max(exact); isInt64Max(rounded); isInt64Min(exact);
 * isInt64Min(neighbor).
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from bigintLiteralPrecisionRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Authored BigInt literals preserve integers exactly beyond Number's safe range and at signed 64-bit limits. Their adjacent integer literals are independent rejecting controls, so floating-point rounding cannot satisfy both assertions.
 * @evidence contracts/testing.md#distinguishing-cases Preserves isUnsafe(exact); isUnsafe(rounded); isInt64Max(exact); isInt64Max(rounded); isInt64Min(exact); isInt64Min(neighbor); the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_bigint_literal_precision in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed bigintLiteralPrecisionSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/bigint_literal_precision_transform_test.go bigintLiteralPrecisionRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_bigint_literal_precision = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const check: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected) {
      throw new Error(label + ": expected " + expected + ", got " + actual);
    }
  };

  // Each literal is accepted, and the neighbor a rounded emit would have
  // collapsed it onto is rejected.
  check("isUnsafe(exact)", mod.isUnsafe(9007199254740993n), true);
  check("isUnsafe(rounded)", mod.isUnsafe(9007199254740992n), false);
  check("isInt64Max(exact)", mod.isInt64Max(9223372036854775807n), true);
  check("isInt64Max(rounded)", mod.isInt64Max(9223372036854775808n), false);
  check("isInt64Min(exact)", mod.isInt64Min(-9223372036854775808n), true);
  check("isInt64Min(neighbor)", mod.isInt64Min(-9223372036854775807n), false);
  check("isUnion(first)", mod.isUnion(9007199254740993n), true);
  check("isUnion(second)", mod.isUnion(9007199254740995n), true);
  check("isUnion(between)", mod.isUnion(9007199254740994n), false);
  check("isUnion(rounded)", mod.isUnion(9007199254740992n), false);

  // A magnitude a double does hold must keep working unchanged.
  check("isSafe(exact)", mod.isSafe(2n), true);
  check("isSafe(other)", mod.isSafe(3n), false);
  check("isSafe(number)", mod.isSafe(2), false);

  console.log("ok");
};
