import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies boolean, true/false literals and their combined union have the
 * declared unrestricted/constant schemas.
 *
 * Literal Boolean metadata and union simplification must reach the emitted
 * public schema value.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert both constants now have symmetric comparisons; true|false must
 *    collapse to unrestricted boolean while each single literal stays
 *    constant.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that boolean, true/false literals and their combined union have the declared unrestricted/constant schemas.
 * @evidence contracts/testing.md#independent-expectations Boolean and literal TypeScript domains determine authored type:boolean and const:true/false expectations.
 * @evidence contracts/testing.md#distinguishing-cases Both constants now have symmetric comparisons; true|false must collapse to unrestricted boolean while each single literal stays constant.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_spec_boolean through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Literal Boolean metadata and union simplification must reach the emitted public schema value. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Both constants now have symmetric comparisons; true|false must collapse to unrestricted boolean while each single literal stays constant. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_spec_boolean = (): void => {
  TestEquality.equals("boolean", clean(typia.json.schema<boolean>().schema), {
    type: "boolean",
  });
  TestEquality.equals("true literal", clean(typia.json.schema<true>().schema), {
    const: true,
  });
  TestEquality.equals(
    "false literal",
    clean(typia.json.schema<false>().schema),
    {
      const: false,
    },
  );
  TestEquality.equals(
    "boolean literal union collapses to boolean",
    clean(typia.json.schema<true | false>().schema),
    {
      type: "boolean",
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
