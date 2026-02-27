import { TestValidator } from "@nestia/e2e";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_json_schema_boolean = (): void => {
  const unit = typia.json.schema<boolean>();
  const schema = unit.schema;

  TestValidator.predicate("is boolean type", () =>
    OpenApiTypeChecker.isBoolean(schema),
  );
};
