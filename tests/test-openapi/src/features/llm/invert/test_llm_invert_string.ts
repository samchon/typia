import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, OpenApi } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { tags } from "typia";

export const test_llm_invert_string = (): void => {
  const validate = (schema: ILlmSchema) => {
    const inverted: OpenApi.IJsonSchema = LlmSchemaComposer.invert({
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
  validate(typia.llm.schema<string & tags.MinLength<3> & tags.MaxLength<10>>({}));
  validate(typia.llm.schema<string & tags.Pattern<"^[a-z]+$">>({}));
  validate(
    typia.llm.schema<
      string & tags.Format<"uri"> & tags.ContentMediaType<"image/png">
    >({}),
  );
};
