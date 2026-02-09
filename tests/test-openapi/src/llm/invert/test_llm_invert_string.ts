import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection, tags } from "typia";

export const test_llm_invert_string = (): void => {
  const validate = (collection: IJsonSchemaCollection) => {
    const $defs: Record<string, ILlmSchema> = {};
    const converted = LlmSchemaComposer.schema({
      components: collection.components,
      schema: collection.schemas[0],
      $defs: $defs as any,
    });
    if (converted.success === false) throw new Error(converted.error.message);
    const inverted = LlmSchemaComposer.invert({
      $defs,
      components: collection.components,
      schema: converted.value,
    } as any);
    TestValidator.equals(
      "inverted",
      (key) => key !== "description",
    )(collection.schemas[0])(inverted);
  };
  validate(
    typia.json.schemas<[string & tags.MinLength<3> & tags.MaxLength<10>]>(),
  );
  validate(typia.json.schemas<[string & tags.Pattern<"^[a-z]+$">]>());
  validate(
    typia.json.schemas<
      [string & tags.Format<"uri"> & tags.ContentMediaType<"image/png">]
    >(),
  );
};
