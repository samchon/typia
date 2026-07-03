import { TestValidator } from "@nestia/e2e";
import { ILlmApplication, ILlmFunction } from "@typia/interface";
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
  TestValidator.equals("coerce+validate succeeds", prepared.success, true);
  if (prepared.success) {
    TestValidator.equals("x coerced", prepared.data.x, 12);
    TestValidator.equals("y coerced", prepared.data.y, 3);
    TestValidator.equals("flag coerced", prepared.data.flag, true);
  }

  // bare validate (no coercion) rejects the same payload — the gap the helper closes
  TestValidator.equals(
    "bare validate rejects loose payload",
    func.validate(loose).success,
    false,
  );

  // equivalence with the explicit coerce -> validate pipeline
  TestValidator.equals(
    "matches explicit coerce+validate",
    LlmJson.validateArguments(func, loose),
    func.validate(LlmJson.coerce(loose, func.parameters)),
  );

  // non-coercible value still fails
  TestValidator.equals(
    "non-coercible fails",
    LlmJson.validateArguments(func, { x: "abc", y: 3, flag: true }).success,
    false,
  );

  // omitted arguments validate against an empty object -> required errors
  TestValidator.equals(
    "omitted arguments fail",
    LlmJson.validateArguments(func, undefined).success,
    false,
  );
};
