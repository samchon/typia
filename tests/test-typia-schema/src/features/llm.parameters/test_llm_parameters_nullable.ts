import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_llm_parameters_nullable = (): void => {
  interface IInput {
    required: string;
    nullableString: string | null;
    nullableNumber: number | null;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestValidator.equals("additionalProperties", params.additionalProperties, false);

  // check required is just string
  const required = params.properties["required"];
  TestValidator.predicate("required is string", () =>
    LlmTypeChecker.isString(required!),
  );

  // check nullableString - should be anyOf with string and null
  const nullableString = params.properties["nullableString"];
  TestValidator.predicate("nullableString exists", () =>
    nullableString !== undefined,
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
