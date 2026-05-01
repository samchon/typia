import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_llm_schema_spec_unknown = (): void => {
  TestValidator.equals("any", clean(typia.llm.schema<any>({})), {});
  TestValidator.equals("unknown", clean(typia.llm.schema<unknown>({})), {});
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
