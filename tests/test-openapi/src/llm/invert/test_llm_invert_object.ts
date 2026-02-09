import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection, tags } from "typia";

export const test_llm_invert_object = (): void => {
  const collection: IJsonSchemaCollection = typia.json.schemas<
    [
      {
        id: string & tags.Format<"uuid">;
        email: string & tags.Format<"email">;
        name: string;
        hobbies: Array<{
          title: string;
          description: string;
        }> &
          tags.MaxItems<10>;
        thumbnail: string &
          tags.Format<"uri"> &
          tags.ContentMediaType<"image/png">;
      },
    ]
  >();
  const converted = LlmSchemaComposer.parameters({
    components: collection.components,
    schema: collection.schemas[0] as OpenApi.IJsonSchema.IReference,
  });
  if (converted.success === false) throw new Error(converted.error.message);
  const inverted = LlmSchemaComposer.invert({
    $defs: (converted.value as any).$defs,
    components: collection.components,
    schema: converted.value,
  } as any);
  TestValidator.equals(
    "inverted",
    (key) => key !== "description",
  )(collection.schemas[0])(inverted);
};
