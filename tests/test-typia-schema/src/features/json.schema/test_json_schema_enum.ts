import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies json schema enum against the native typia.json.schema output.
 *
 * The case builds its input in this file and asserts Status exists in
 * components, is oneOf type, has 3 const values, all are const, contains
 * pending.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (Status exists in components; is oneOf type; has 3 const values; all are const; contains pending).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (Status exists in components; is oneOf type; has 3 const values; all are const; contains pending) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_enum is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
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
    TestValidator.predicate(
      "Status exists in components",
      () => statusSchema !== undefined,
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
    TestEquality.equals("has 3 const values", oneOf.oneOf.length, 3);
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
