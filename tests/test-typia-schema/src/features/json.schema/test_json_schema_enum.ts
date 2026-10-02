import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies the emitted Status alternatives retain all three string constants.
 *
 * The native literal-union producer must preserve the full declared finite
 * domain.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert alternative kind/count, component availability and pending presence
 *    remain; exact constant membership additionally prevents duplicate
 *    constants from hiding a lost value.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that the emitted Status alternatives retain all three string constants.
 * @evidence contracts/testing.md#independent-expectations The declared pending/active/completed literal domain supplies the independently authored sorted expectation.
 * @evidence contracts/testing.md#distinguishing-cases Alternative kind/count, component availability and pending presence remain; exact constant membership additionally prevents duplicate constants from hiding a lost value.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_enum through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary The native literal-union producer must preserve the full declared finite domain. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Alternative kind/count, component availability and pending presence remain; exact constant membership additionally prevents duplicate constants from hiding a lost value. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
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
    TestEquality.equals(
      "all declared status values survive",
      oneOf.oneOf.map((s) => (s as OpenApi.IJsonSchema.IConstant).const).sort(),
      ["active", "completed", "pending"],
    );
  }
};
