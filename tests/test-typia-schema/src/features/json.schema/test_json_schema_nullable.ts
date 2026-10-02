import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies the schema has exactly the string and null alternatives.
 *
 * TypeScript null union metadata must reach both public schema alternatives.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert existing kind/presence checks remain and the exact count prevents an
 *    extra alternative from broadening nullability; spec_nullable owns complete
 *    structural comparison.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that the schema has exactly the string and null alternatives.
 * @evidence contracts/testing.md#independent-expectations The handwritten string|null domain requires two schema alternatives of those kinds.
 * @evidence contracts/testing.md#distinguishing-cases Existing kind/presence checks remain and the exact count prevents an extra alternative from broadening nullability; spec_nullable owns complete structural comparison.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_nullable through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary TypeScript null union metadata must reach both public schema alternatives. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Existing kind/presence checks remain and the exact count prevents an extra alternative from broadening nullability; spec_nullable owns complete structural comparison. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_nullable = (): void => {
  const unit = typia.json.schema<string | null>();
  const schema = unit.schema;

  TestValidator.predicate("is oneOf type", () =>
    OpenApiTypeChecker.isOneOf(schema),
  );

  if (OpenApiTypeChecker.isOneOf(schema)) {
    const oneOf = schema as OpenApi.IJsonSchema.IOneOf;
    TestEquality.equals(
      "exactly two nullable alternatives",
      oneOf.oneOf.length,
      2,
    );
    TestValidator.predicate("contains string", () =>
      oneOf.oneOf.some((s) => OpenApiTypeChecker.isString(s)),
    );
    TestValidator.predicate("contains null", () =>
      oneOf.oneOf.some((s) => OpenApiTypeChecker.isNull(s)),
    );
  }
};
