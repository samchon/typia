import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, OpenApi } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { tags } from "typia";

export const test_llm_schema_invert = (): void => {
  const validate = (title: string, schema: ILlmSchema): void => {
    const inverted: OpenApi.IJsonSchema = LlmSchemaComposer.invert({
      components: {},
      $defs: {},
      schema,
    });
    TestValidator.equals(
      title,
      schema,
      inverted as any,
      (key) => key === "description",
    );
  };

  validate(
    "string",
    typia.llm.schema<
      string &
        tags.Format<"uri"> &
        tags.ContentMediaType<"image/*"> &
        tags.MinLength<0> &
        tags.MaxLength<128>
    >({}),
  );
  validate(
    "integer",
    typia.llm.schema<
      number &
        tags.Type<"int32"> &
        tags.ExclusiveMinimum<0> &
        tags.ExclusiveMaximum<100> &
        tags.MultipleOf<5> &
        tags.Default<5>
    >({}),
  );
  validate(
    "number",
    typia.llm.schema<
      number &
        tags.Type<"int32"> &
        tags.ExclusiveMinimum<0> &
        tags.ExclusiveMaximum<100> &
        tags.MultipleOf<5> &
        tags.Default<5>
    >({}),
  );

  validate(
    "array",
    typia.llm.schema<Array<string & tags.Pattern<"*">> & tags.UniqueItems>({}),
  );
  validate(
    "object",
    typia.llm.schema<{
      /**
       * List of items.
       *
       * List of items containing any string values.
       */
      array: Array<string & tags.Pattern<"*">>;
    }>({}),
  );
};
