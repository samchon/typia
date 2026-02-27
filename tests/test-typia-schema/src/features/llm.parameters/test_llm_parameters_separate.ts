import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_llm_parameters_separate = (): void => {
  interface IFileUpload {
    image: string;
    description: string;
    tags: string[];
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IFileUpload>();

  TestValidator.predicate("is object type", () => LlmTypeChecker.isObject(params));

  if (LlmTypeChecker.isObject(params)) {
    TestValidator.predicate("has image property", () =>
      "image" in params.properties,
    );
    TestValidator.predicate("has description property", () =>
      "description" in params.properties,
    );
    TestValidator.predicate("has tags property", () =>
      "tags" in params.properties,
    );

    const image = params.properties["image"];
    if (image) {
      TestValidator.predicate("image is string", () =>
        LlmTypeChecker.isString(image),
      );
    }

    const tags = params.properties["tags"];
    if (tags) {
      TestValidator.predicate("tags is array", () => LlmTypeChecker.isArray(tags));
    }
  }
};
