import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies null has a null schema while any and unknown have unrestricted
 * schemas.
 *
 * Native atomic/null/unrestricted metadata must select the correct public
 * schema representation.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert null is the constrained twin of any/unknown; both unrestricted
 *    spellings remain independently emitted.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that null has a null schema while any and unknown have unrestricted schemas.
 * @evidence contracts/testing.md#independent-expectations Null and unrestricted TypeScript domains supply the independently authored type:null versus empty-object expectations.
 * @evidence contracts/testing.md#distinguishing-cases Null is the constrained twin of any/unknown; both unrestricted spellings remain independently emitted.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_spec_null_unknown through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native atomic/null/unrestricted metadata must select the correct public schema representation. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Null is the constrained twin of any/unknown; both unrestricted spellings remain independently emitted. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_spec_null_unknown = (): void => {
  TestEquality.equals("null", clean(typia.json.schema<null>().schema), {
    type: "null",
  });
  TestEquality.equals("any", clean(typia.json.schema<any>().schema), {});
  TestEquality.equals(
    "unknown",
    clean(typia.json.schema<unknown>().schema),
    {},
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
