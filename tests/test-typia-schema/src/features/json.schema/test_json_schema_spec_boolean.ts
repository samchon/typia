import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_json_schema_spec_boolean = (): void => {
  TestValidator.equals("boolean", clean(typia.json.schema<boolean>().schema), {
    type: "boolean",
  });
  TestValidator.equals(
    "true literal",
    clean(typia.json.schema<true>().schema),
    {
      const: true,
    },
  );
  TestValidator.equals(
    "boolean literal union collapses to boolean",
    clean(typia.json.schema<true | false>().schema),
    {
      type: "boolean",
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
