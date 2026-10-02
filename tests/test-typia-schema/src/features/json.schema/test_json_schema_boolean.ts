import { TestValidator } from "@nestia/e2e";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies the unrestricted boolean declaration produces a boolean schema.
 *
 * An unrestricted Boolean type must become a schema value at the public call
 * site.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert this entry retains the boolean shape check;
 *    test_json_schema_spec_boolean owns true/false literals and literal-union
 *    collapse.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that the unrestricted boolean declaration produces a boolean schema.
 * @evidence contracts/testing.md#independent-expectations The TypeScript boolean domain supplies the expected schema kind; the predicate only checks that kind.
 * @evidence contracts/testing.md#distinguishing-cases This entry retains the boolean shape check; test_json_schema_spec_boolean owns true/false literals and literal-union collapse.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_boolean through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary An unrestricted Boolean type must become a schema value at the public call site. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage This entry retains the boolean shape check; test_json_schema_spec_boolean owns true/false literals and literal-union collapse. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_boolean = (): void => {
  const unit = typia.json.schema<boolean>();
  const schema = unit.schema;

  TestValidator.predicate("is boolean type", () =>
    OpenApiTypeChecker.isBoolean(schema),
  );
};
