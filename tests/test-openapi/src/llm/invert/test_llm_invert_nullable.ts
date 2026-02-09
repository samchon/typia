import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { IJsonSchemaCollection, tags } from "typia";

export const test_llm_invert_nullable = (): void => {
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
  validate(typia.json.schemas<[boolean | null]>());
  validate(
    typia.json.schemas<
      [
        | (number &
            tags.ExclusiveMinimum<0> &
            tags.Maximum<100> &
            tags.MultipleOf<5>)
        | null,
      ]
    >(),
  );
  validate(
    typia.json.schemas<
      [
        | (string &
            tags.Format<"uri"> &
            tags.ContentMediaType<"image/png"> &
            tags.MinLength<5>)
        | null,
      ]
    >(),
  );
  validate(
    typia.json.schemas<
      [(Array<number> & tags.MinItems<1> & tags.MaxItems<10>) | null]
    >(),
  );
  validate(
    typia.json.schemas<
      [
        {
          /** Primary Key. */
          id: string & tags.Format<"uuid">;

          /** Email Address. */
          email: string & tags.Format<"email">;
          name: string;
          age: null | (number & tags.Minimum<0> & tags.Maximum<100>);
          hobbies: Array<{
            title: string;
            description: string;
          }>;
        } | null,
      ]
    >(),
  );
};
