import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_json_schema_tuple = (): void => {
  const unit = typia.json.schema<[string, number, boolean]>();
  const schema = unit.schema;

  TestValidator.predicate("is tuple type", () =>
    OpenApiTypeChecker.isTuple(schema),
  );

  if (OpenApiTypeChecker.isTuple(schema)) {
    const tuple = schema as OpenApi.IJsonSchema.ITuple;
    TestValidator.equals("prefixItems length", tuple.prefixItems.length, 3);
    TestValidator.predicate("first is string", () =>
      OpenApiTypeChecker.isString(tuple.prefixItems[0]!),
    );
    TestValidator.predicate("second is number", () =>
      OpenApiTypeChecker.isNumber(tuple.prefixItems[1]!),
    );
    TestValidator.predicate("third is boolean", () =>
      OpenApiTypeChecker.isBoolean(tuple.prefixItems[2]!),
    );
  }
};
