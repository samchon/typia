import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { ILlmSchema } from "typia";

export const test_llm_invert_enum = (): void => {
  const validate = (schema: ILlmSchema) => {
    const inverted: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
      $defs: {},
      components: {},
      schema,
    } as any);
    TestValidator.equals(
      "inverted",
      schema,
      inverted as any,
      (key) => key !== "description",
    );
  };
  validate(typia.llm.schema<false>({}));
  validate(typia.llm.schema<1 | 2 | 3>({}));
  validate(typia.llm.schema<"a" | "b" | "c">({}));
};
