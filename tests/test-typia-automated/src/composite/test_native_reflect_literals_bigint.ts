import typia from "typia";

const small = typia.reflect.literals<1n | 2n>();
const mixed = typia.reflect.literals<"A" | "B" | 1 | 2n>();
const negative = typia.reflect.literals<-5n | 5n>();
const zero = typia.reflect.literals<0n>();

// 2**53 + 1 is the smallest integer a double cannot hold, and the int64 bounds
// are where a rounded literal would land on the wrong side of the range.
const unsafe = typia.reflect.literals<9007199254740993n>();
const int64 = typia.reflect.literals<
  -9223372036854775808n | 9223372036854775807n
>();
const fixture = { small, mixed, negative, zero, unsafe, int64 };

/**
 * Verifies reflect literals bigint in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * reflectLiteralsBigintSource declarations; the former
 * reflectLiteralsBigintRunner observations execute in the existing automated
 * worker. This detects a generated program whose output compiles but changes
 * these runtime decisions: small; mixed; negative; zero; unsafe; int64.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from reflectLiteralsBigintRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The authored bigint union literals determine the exact reflected bigint values and JavaScript typeof bigint. Neighboring string/number literals retain their own representations, so a rounded number or decimal string cannot satisfy the same assertions.
 * @evidence contracts/testing.md#distinguishing-cases Preserves small; mixed; negative; zero; unsafe; int64; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_reflect_literals_bigint in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed reflectLiteralsBigintSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/reflect_literals_bigint_transform_test.go reflectLiteralsBigintRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_reflect_literals_bigint = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const render: any = (value: any): any =>
    typeof value === "bigint" ? value.toString() + "n" : JSON.stringify(value);

  const check: any = (label: any, actual: any, expected: any): any => {
    if (Array.isArray(actual) === false) {
      throw new Error(label + ": expected an array, got " + render(actual));
    }
    if (actual.length !== expected.length) {
      throw new Error(
        label +
          ": expected " +
          expected.map(render).join(", ") +
          ", got " +
          actual.map(render).join(", "),
      );
    }
    actual.forEach((item: any, index: any): any => {
      // typeof is asserted separately: a rounded BigInt(9007199254740993) is
      // still a bigint, and an object literal is still deep-equal to nothing, so
      // neither check alone catches both defects.
      if (typeof item !== typeof expected[index]) {
        throw new Error(
          label +
            "[" +
            index +
            "]: expected typeof " +
            typeof expected[index] +
            ", got " +
            typeof item +
            " (" +
            render(item) +
            ")",
        );
      }
      if (item !== expected[index]) {
        throw new Error(
          label +
            "[" +
            index +
            "]: expected " +
            render(expected[index]) +
            ", got " +
            render(item),
        );
      }
    });
  };

  check("small", mod.small, [1n, 2n]);
  check("mixed", mod.mixed, ["A", "B", 1, 2n]);
  check("negative", mod.negative, [-5n, 5n]);
  check("zero", mod.zero, [0n]);
  check("unsafe", mod.unsafe, [9007199254740993n]);
  check("int64", mod.int64, [-9223372036854775808n, 9223372036854775807n]);

  console.log("ok");
};
