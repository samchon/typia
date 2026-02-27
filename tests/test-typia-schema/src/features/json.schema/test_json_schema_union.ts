import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_json_schema_union = (): void => {
  const unit = typia.json.schema<string | number>();
  const schema = unit.schema;

  TestValidator.predicate("is oneOf type", () =>
    OpenApiTypeChecker.isOneOf(schema),
  );

  if (OpenApiTypeChecker.isOneOf(schema)) {
    const oneOf = schema as OpenApi.IJsonSchema.IOneOf;
    TestValidator.equals("oneOf has 2 types", oneOf.oneOf.length, 2);
    TestValidator.predicate("contains string", () =>
      oneOf.oneOf.some((s) => OpenApiTypeChecker.isString(s)),
    );
    TestValidator.predicate("contains number", () =>
      oneOf.oneOf.some((s) => OpenApiTypeChecker.isNumber(s)),
    );
  }
};
