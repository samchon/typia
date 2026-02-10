import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";
import typia, { tags } from "typia";

export const test_llm_invert_number = (): void => {
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
  validate(typia.llm.schema<number>({}));
  validate(
    typia.llm.schema<
      number & tags.Minimum<0> & tags.Maximum<100> & tags.MultipleOf<5>
    >({}),
  );
  validate(
    typia.llm.schema<
      number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>
    >({}),
  );
};
