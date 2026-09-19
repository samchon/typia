import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { ILlmSchema } from "typia";

export const test_llm_invert_oneof = (): void => {
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
