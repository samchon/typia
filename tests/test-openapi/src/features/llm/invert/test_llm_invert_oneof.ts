import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, OpenApi } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia from "typia";

export const test_llm_invert_oneof = (): void => {
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
  validate(typia.llm.schema<string | number | boolean>({}));
  validate(typia.llm.schema<string | 1 | 2 | 3 | null>({}));
  validate(
    typia.llm.schema<
      | { x: number }
      | { y: number }
      | { z: number }
      | Array<boolean>
      | string
      | number
    >({}),
  );
};
