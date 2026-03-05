import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_json_schema_nullable = (): void => {
  const unit = typia.json.schema<string | null>();
  const schema = unit.schema;

  TestValidator.predicate("is oneOf type", () =>
    OpenApiTypeChecker.isOneOf(schema),
  );

  if (OpenApiTypeChecker.isOneOf(schema)) {
    const oneOf = schema as OpenApi.IJsonSchema.IOneOf;
    TestValidator.predicate("contains string", () =>
      oneOf.oneOf.some((s) => OpenApiTypeChecker.isString(s)),
    );
    TestValidator.predicate("contains null", () =>
      oneOf.oneOf.some((s) => OpenApiTypeChecker.isNull(s)),
    );
  }
};
