import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { ILlmSchema, tags } from "typia";

export const test_llm_invert_integer = (): void => {
  const validate = (schema: ILlmSchema) => {
    const inverted: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
      $defs: {},
      components: {},
      schema,
    });
    TestValidator.equals(
      "inverted",
      schema,
      inverted as any,
      (key) => key !== "description",
    );
  };
  validate(typia.llm.schema<number & tags.Type<"int32">>({}));
  validate(
    typia.llm.schema<
      number &
        tags.Type<"int32"> &
        tags.Minimum<0> &
        tags.Maximum<100> &
        tags.MultipleOf<5>
    >({}),
  );
  validate(
    typia.llm.schema<
      number &
        tags.Type<"int32"> &
        tags.ExclusiveMinimum<0> &
        tags.ExclusiveMaximum<100>
    >({}),
  );
};
