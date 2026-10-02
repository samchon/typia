import { ILlmApplication, ILlmFunction } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

/**
 * Verifies LlmJson.validateArguments coerces before validating.
 *
 * The whole point of the helper is that `func.validate(args)` alone rejects the
 * loosely-typed values LLMs emit (a stringified number/boolean), whereas
 * function-call handlers must coerce first. This pins that contract: the same
 * coercible payload passes through `validateArguments` but fails the bare
 * `func.validate`, and the coerced `data` carries the corrected primitive
 * types.
 *
 * 1. Build a function whose one parameter has a number and a boolean field.
 * 2. Feed stringified `"12"` / `"true"` values through both paths.
 * 3. Assert `validateArguments` succeeds with coerced data while the bare
 *    `func.validate` fails, and that non-coercible / omitted input still
 *    fails.
 *
 * @evidence contracts/testing.md#behavioral-verification validateArguments and the bare function validate are run on stringified number and boolean payloads; the first must succeed with corrected primitives and the second must fail.
 * @evidence contracts/testing.md#independent-expectations The loosely typed payload values and expected corrected types are authored from the documented coercion purpose.
 * @evidence contracts/testing.md#distinguishing-cases Coercible payload through both paths and a non-coercible payload separate coerce-then-validate from validate alone.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. the function schema comes from the native producer; validation and coercion run in process.
 * @evidence contracts/e2e.md#necessary-boundary Native llm.application supplies an executable validator and its parameter schema to validateArguments. Literal 12/3/true results, bare-validator rejection, noncoercible input and omitted arguments distinguish generated callback/schema assembly from portable coercion alone.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
 */
export const test_llm_validate_arguments = (): void => {
  interface ICalculator {
    add(input: { x: number; y: number; flag: boolean }): void;
  }

  const app: ILlmApplication = typia.llm.application<ICalculator>();
  const func: ILlmFunction | undefined = app.functions[0];
  if (func === undefined) throw new Error("function not generated");

  // coercible LLM payload: strings for number/boolean
  const loose = { x: "12", y: "3", flag: "true" };

  const prepared = LlmJson.validateArguments<{
    x: number;
    y: number;
    flag: boolean;
  }>(func, loose);
  TestEquality.equals("coerce+validate succeeds", prepared.success, true);
  if (prepared.success) {
    TestEquality.equals("x coerced", prepared.data.x, 12);
    TestEquality.equals("y coerced", prepared.data.y, 3);
    TestEquality.equals("flag coerced", prepared.data.flag, true);
  }

  // bare validate (no coercion) rejects the same payload — the gap the helper closes
  TestEquality.equals(
    "bare validate rejects loose payload",
    func.validate(loose).success,
    false,
  );

  // equivalence with the explicit coerce -> validate pipeline
  TestEquality.equals(
    "matches explicit coerce+validate",
    LlmJson.validateArguments(func, loose),
    func.validate(LlmJson.coerce(loose, func.parameters)),
  );

  // non-coercible value still fails
  TestEquality.equals(
    "non-coercible fails",
    LlmJson.validateArguments(func, { x: "abc", y: 3, flag: true }).success,
    false,
  );

  // omitted arguments validate against an empty object -> required errors
  TestEquality.equals(
    "omitted arguments fail",
    LlmJson.validateArguments(func, undefined).success,
    false,
  );
};
