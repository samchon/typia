import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_llm_schema_spec_unknown = (): void => {
  TestEquality.equals("any", clean(typia.llm.schema<any>({})), {});
  TestEquality.equals("unknown", clean(typia.llm.schema<unknown>({})), {});
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
