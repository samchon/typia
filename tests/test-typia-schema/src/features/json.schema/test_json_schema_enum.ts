import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_json_schema_enum = (): void => {
  type Status = "pending" | "active" | "completed";
  const unit = typia.json.schema<Status>();

  // named type may return $ref
  const schema = unit.schema;
  const isRef = OpenApiTypeChecker.isReference(schema);

  // get actual schema from components if it's a ref
  let actualSchema: OpenApi.IJsonSchema;
  if (isRef) {
    const statusSchema = unit.components.schemas?.["Status"];
    TestValidator.predicate("Status exists in components", () =>
      statusSchema !== undefined,
    );
    actualSchema = statusSchema!;
  } else {
    actualSchema = schema;
  }

  TestValidator.predicate("is oneOf type", () =>
    OpenApiTypeChecker.isOneOf(actualSchema),
  );

  if (OpenApiTypeChecker.isOneOf(actualSchema)) {
    const oneOf = actualSchema as OpenApi.IJsonSchema.IOneOf;
    TestValidator.equals("has 3 const values", oneOf.oneOf.length, 3);
    TestValidator.predicate("all are const", () =>
      oneOf.oneOf.every((s) => OpenApiTypeChecker.isConstant(s)),
    );
    TestValidator.predicate("contains pending", () =>
      oneOf.oneOf.some(
        (s) =>
          OpenApiTypeChecker.isConstant(s) &&
          (s as OpenApi.IJsonSchema.IConstant).const === "pending",
      ),
    );
  }
};
