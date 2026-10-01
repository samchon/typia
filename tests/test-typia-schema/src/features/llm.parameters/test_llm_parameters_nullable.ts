import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies llm parameters nullable against the native typia.llm.parameters
 * output.
 *
 * The case builds its input in this file and asserts is object,
 * additionalProperties, required is string, nullableString exists,
 * nullableString is anyOf, nullableString has string.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 10 assertions (is object; additionalProperties; required is string; nullableString exists; nullableString is anyOf; nullableString has string).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is object; additionalProperties; required is string; nullableString exists; nullableString is anyOf; nullableString has string) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_nullable is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_parameters_nullable = (): void => {
  interface IInput {
    required: string;
    nullableString: string | null;
    nullableNumber: number | null;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check required is just string
  const required = params.properties["required"];
  TestValidator.predicate("required is string", () =>
    LlmTypeChecker.isString(required!),
  );

  // check nullableString - should be anyOf with string and null
  const nullableString = params.properties["nullableString"];
  TestValidator.predicate(
    "nullableString exists",
    () => nullableString !== undefined,
  );
  TestValidator.predicate("nullableString is anyOf", () =>
    LlmTypeChecker.isAnyOf(nullableString!),
  );

  if (LlmTypeChecker.isAnyOf(nullableString!)) {
    TestValidator.predicate("nullableString has string", () =>
      nullableString.anyOf.some((s) => LlmTypeChecker.isString(s)),
    );
    TestValidator.predicate("nullableString has null", () =>
      nullableString.anyOf.some((s) => LlmTypeChecker.isNull(s)),
    );
  }

  // check nullableNumber - should be anyOf with number and null
  const nullableNumber = params.properties["nullableNumber"];
  TestValidator.predicate("nullableNumber is anyOf", () =>
    LlmTypeChecker.isAnyOf(nullableNumber!),
  );

  if (LlmTypeChecker.isAnyOf(nullableNumber!)) {
    TestValidator.predicate("nullableNumber has number", () =>
      nullableNumber.anyOf.some((s) => LlmTypeChecker.isNumber(s)),
    );
    TestValidator.predicate("nullableNumber has null", () =>
      nullableNumber.anyOf.some((s) => LlmTypeChecker.isNull(s)),
    );
  }
};
