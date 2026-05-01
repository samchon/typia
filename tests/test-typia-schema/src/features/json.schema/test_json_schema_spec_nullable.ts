import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_json_schema_spec_nullable = (): void => {
  TestValidator.equals(
    "nullable string",
    normalizeOneOf(clean(typia.json.schema<string | null>().schema)),
    {
      oneOf: [
        {
          type: "null",
        },
        {
          type: "string",
        },
      ],
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const normalizeOneOf = (schema: any): any => ({
  ...schema,
  oneOf: [...schema.oneOf].sort((a, b) =>
    JSON.stringify(a).localeCompare(JSON.stringify(b)),
  ),
});
