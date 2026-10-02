import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies the string|number schema contains exactly the two declared atomic
 * kinds.
 *
 * Native heterogeneous-union metadata must reach both public schema branches.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert kind/count/string/number checks remain; nullable owns the neighboring
 *    null alternative.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that the string|number schema contains exactly the two declared atomic kinds.
 * @evidence contracts/testing.md#independent-expectations The handwritten TypeScript union domain supplies the two kinds and expected count.
 * @evidence contracts/testing.md#distinguishing-cases Kind/count/string/number checks remain; nullable owns the neighboring null alternative.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_union through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native heterogeneous-union metadata must reach both public schema branches. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Kind/count/string/number checks remain; nullable owns the neighboring null alternative. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_union = (): void => {
  const unit = typia.json.schema<string | number>();
  const schema = unit.schema;

  TestValidator.predicate("is oneOf type", () =>
    OpenApiTypeChecker.isOneOf(schema),
  );

  if (OpenApiTypeChecker.isOneOf(schema)) {
    const oneOf = schema as OpenApi.IJsonSchema.IOneOf;
    TestEquality.equals("oneOf has 2 types", oneOf.oneOf.length, 2);
    TestValidator.predicate("contains string", () =>
      oneOf.oneOf.some((s) => OpenApiTypeChecker.isString(s)),
    );
    TestValidator.predicate("contains number", () =>
      oneOf.oneOf.some((s) => OpenApiTypeChecker.isNumber(s)),
    );
  }
};
