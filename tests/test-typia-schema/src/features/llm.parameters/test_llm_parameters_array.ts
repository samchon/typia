import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_parameters_array = (): void => {
  interface IInput {
    tags: string[];
    scores: number[];
    limited: string[] & tags.MinItems<1> & tags.MaxItems<10>;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check tags
  const tagsSchema = params.properties["tags"];
  TestValidator.predicate("tags is array", () =>
    LlmTypeChecker.isArray(tagsSchema!),
  );
  if (LlmTypeChecker.isArray(tagsSchema!)) {
    TestValidator.predicate("tags items is string", () =>
      LlmTypeChecker.isString(tagsSchema.items),
    );
  }

  // check scores
  const scores = params.properties["scores"];
  TestValidator.predicate("scores is array", () =>
    LlmTypeChecker.isArray(scores!),
  );
  if (LlmTypeChecker.isArray(scores!)) {
    TestValidator.predicate("scores items is number", () =>
      LlmTypeChecker.isNumber(scores.items),
    );
  }

  // check limited array constraints
  const limited = params.properties["limited"];
  if (LlmTypeChecker.isArray(limited!)) {
    TestEquality.equals("minItems", limited.minItems, 1);
    TestEquality.equals("maxItems", limited.maxItems, 10);
  }
};
