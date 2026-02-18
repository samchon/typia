import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_invert_object = (): void => {
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
  validate(
    typia.llm.schema<{
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
    }>({}),
  );
};
