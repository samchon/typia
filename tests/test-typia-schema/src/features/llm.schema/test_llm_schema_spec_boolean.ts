import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_llm_schema_spec_boolean = (): void => {
  TestEquality.equals("boolean", clean(typia.llm.schema<boolean>({})), {
    type: "boolean",
  });
  TestEquality.equals("true literal", clean(typia.llm.schema<true>({})), {
    type: "boolean",
    enum: [true],
  });
  TestEquality.equals("false literal", clean(typia.llm.schema<false>({})), {
    type: "boolean",
    enum: [false],
  });
  TestEquality.equals(
    "boolean literal union collapses to boolean",
    clean(typia.llm.schema<true | false>({})),
    {
      type: "boolean",
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
