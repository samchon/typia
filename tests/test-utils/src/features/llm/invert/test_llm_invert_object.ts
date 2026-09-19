import { ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_invert_object = (): void => {
  const validate = (schema: ILlmSchema) => {
    const inverted: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
      $defs: {},
      components: {},
      schema,
    });
    TestEquality.equals(
      "inverted",
      schema,
      inverted as any,
      (key) => key === "description",
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
