import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies the tuple schema retains three positional types in their declared
 * order.
 *
 * Native tuple position metadata must survive generated prefixItems ordering.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert all original tuple kind/count/three-position assertions remain;
 *    spec_array_tuple owns the neighboring homogeneous array representation.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that the tuple schema retains three positional types in their declared order.
 * @evidence contracts/testing.md#independent-expectations The authored [string,number,boolean] tuple independently fixes kind, length and position expectations.
 * @evidence contracts/testing.md#distinguishing-cases All original tuple kind/count/three-position assertions remain; spec_array_tuple owns the neighboring homogeneous array representation.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_tuple through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native tuple position metadata must survive generated prefixItems ordering. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage All original tuple kind/count/three-position assertions remain; spec_array_tuple owns the neighboring homogeneous array representation. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_tuple = (): void => {
  const unit = typia.json.schema<[string, number, boolean]>();
  const schema = unit.schema;

  TestValidator.predicate("is tuple type", () =>
    OpenApiTypeChecker.isTuple(schema),
  );

  if (OpenApiTypeChecker.isTuple(schema)) {
    const tuple = schema as OpenApi.IJsonSchema.ITuple;
    TestEquality.equals("prefixItems length", tuple.prefixItems.length, 3);
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
