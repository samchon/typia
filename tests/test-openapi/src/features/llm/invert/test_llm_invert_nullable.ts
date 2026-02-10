import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { tags } from "typia";

export const test_llm_invert_nullable = (): void => {
  const validate = (schema: ILlmSchema) => {
    const inverted = LlmSchemaComposer.invert({
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
  validate(typia.llm.schema<boolean | null>({}));
  validate(
    typia.llm.schema<
      | (number &
          tags.ExclusiveMinimum<0> &
          tags.Maximum<100> &
          tags.MultipleOf<5>)
      | null
    >({}),
  );
  validate(
    typia.llm.schema<
      | (string &
          tags.Format<"uri"> &
          tags.ContentMediaType<"image/png"> &
          tags.MinLength<5>)
      | null
    >({}),
  );
  validate(
    typia.llm.schema<
      (Array<number> & tags.MinItems<1> & tags.MaxItems<10>) | null
    >({}),
  );
  validate(
    typia.llm.schema<{
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
    } | null>({}),
  );
};
