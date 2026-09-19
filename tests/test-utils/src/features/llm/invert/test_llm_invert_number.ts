import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { ILlmSchema, tags } from "typia";

export const test_llm_invert_number = (): void => {
  const validate = (schema: ILlmSchema) => {
    const inverted = LlmSchemaConverter.invert({
      $defs: {},
      components: {},
      schema,
    } as any);
    TestEquality.equals(
      "inverted",
      schema,
      inverted as any,
      (key) => key === "description",
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
