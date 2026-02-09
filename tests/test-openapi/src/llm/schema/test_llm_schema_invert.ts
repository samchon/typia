import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, IOpenApiSchemaError, IResult } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaUnit, tags } from "typia";

export const test_llm_schema_invert = (): void => {
  const assert = (title: string, unit: IJsonSchemaUnit): void => {
    const result: IResult<ILlmSchema, IOpenApiSchemaError> =
      LlmSchemaComposer.schema({
        components: unit.components,
        schema: unit.schema,
        $defs: {},
      });
    if (result.success === false)
      throw new Error("Failed to compose LLM schema.");
    const inverted = LlmSchemaComposer.invert({
      components: {},
      $defs: {},
      schema: result.value,
    });
    TestValidator.equals(
      title,
      inverted,
      unit.schema,
      (key) => key === "description",
    );
  };

  assert(
    "string",
    typia.json.schema<
      string &
        tags.Format<"uri"> &
        tags.ContentMediaType<"image/*"> &
        tags.MinLength<0> &
        tags.MaxLength<128>
    >(),
  );
  assert(
    "integer",
    typia.json.schema<
      number &
        tags.Type<"int32"> &
        tags.ExclusiveMinimum<0> &
        tags.ExclusiveMaximum<100> &
        tags.MultipleOf<5> &
        tags.Default<5>
    >(),
  );
  assert(
    "number",
    typia.json.schema<
      number &
        tags.Type<"int32"> &
        tags.ExclusiveMinimum<0> &
        tags.ExclusiveMaximum<100> &
        tags.MultipleOf<5> &
        tags.Default<5>
    >(),
  );

  assert(
    "array",
    typia.json.schema<Array<string & tags.Pattern<"*">> & tags.UniqueItems>(),
  );
  assert(
    "object",
    typia.json.schema<{
      /**
       * List of items.
       *
       * List of items containing any string values.
       */
      array: Array<string & tags.Pattern<"*">>;
    }>(),
  );
};
