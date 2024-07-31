import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1188_json_schema_tuple_type = (): void => {
  TestValidator.equals("tuples")(
    typia.json.application<
      [[boolean, number], [boolean, number, ...string[]]]
    >().schemas,
  )([
    {
      type: "array",
      prefixItems: [{ type: "boolean" }, { type: "number" }],
      additionalItems: false,
    },
    {
      type: "array",
      prefixItems: [{ type: "boolean" }, { type: "number" }],
      additionalItems: { type: "string" },
    },
  ]);
};
