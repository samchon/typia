import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_json_schema_spec_null_unknown = (): void => {
  TestValidator.equals("null", clean(typia.json.schema<null>().schema), {
    type: "null",
  });
  TestValidator.equals("any", clean(typia.json.schema<any>().schema), {});
  TestValidator.equals(
    "unknown",
    clean(typia.json.schema<unknown>().schema),
    {},
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
