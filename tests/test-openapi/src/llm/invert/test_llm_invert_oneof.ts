import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection } from "typia";

export const test_llm_invert_oneof = (): void => {
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
  validate(typia.json.schemas<[string | number | boolean]>());
  validate(typia.json.schemas<[string | 1 | 2 | 3 | null]>());
  validate(
    typia.json.schemas<
      [
        | { x: number }
        | { y: number }
        | { z: number }
        | Array<boolean>
        | string
        | number,
      ]
    >(),
  );
};
