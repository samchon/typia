import { TestValidator } from "@nestia/e2e";
import { OpenApiConverter } from "@typia/utils";
import typia from "typia";

export const test_json_schema_v30_parity_nullable = (): void => {
  const source = typia.json.schema<string | null>();
  const actual = typia.json.schema<string | null, "3.0">();
  const downgraded = OpenApiConverter.downgradeComponents(
    source.components,
    "3.0",
  );
  const expected = OpenApiConverter.downgradeSchema({
    version: "3.0",
    components: source.components,
    schema: source.schema,
    downgraded,
  });

  TestValidator.equals("schema", clean(actual.schema), clean(expected));
  TestValidator.equals(
    "components",
    clean(actual.components),
    clean(downgraded),
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
