import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies a string|null union matches the exact two-alternative schema.
 *
 * Native nullable-union composition must preserve all alternatives through the
 * emitted object.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert the exact structural comparison rejects missing, additional or
 *    malformed alternatives; test_json_schema_string is the nonnullable
 *    control.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that a string|null union matches the exact two-alternative schema.
 * @evidence contracts/testing.md#independent-expectations Expected string and null objects are handwritten; normalizeOneOf only reorders the unordered alternatives and does not derive expected members.
 * @evidence contracts/testing.md#distinguishing-cases The exact structural comparison rejects missing, additional or malformed alternatives; test_json_schema_string is the nonnullable control.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_spec_nullable through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native nullable-union composition must preserve all alternatives through the emitted object. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage The exact structural comparison rejects missing, additional or malformed alternatives; test_json_schema_string is the nonnullable control. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_spec_nullable = (): void => {
  TestEquality.equals(
    "nullable string",
    normalizeOneOf(clean(typia.json.schema<string | null>().schema)),
    {
      oneOf: [
        {
          type: "null",
        },
        {
          type: "string",
        },
      ],
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const normalizeOneOf = (schema: any): any => ({
  ...schema,
  oneOf: [...schema.oneOf].sort((a, b) =>
    JSON.stringify(a).localeCompare(JSON.stringify(b)),
  ),
});
