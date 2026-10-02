import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies format, pattern and length tags stay attached to string schemas.
 *
 * Native string-tag metadata must preserve schema kind together with each
 * annotation.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert plain/formatted/patterned/constrained string calls remain; the
 *    constrained shape now fails explicitly before length assertions can be
 *    skipped.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that format, pattern and length tags stay attached to string schemas.
 * @evidence contracts/testing.md#independent-expectations Declared email, ^[a-z]+$ and 1/100 bounds independently fix annotations.
 * @evidence contracts/testing.md#distinguishing-cases Plain/formatted/patterned/constrained string calls remain; the constrained shape now fails explicitly before length assertions can be skipped.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_string through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native string-tag metadata must preserve schema kind together with each annotation. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Plain/formatted/patterned/constrained string calls remain; the constrained shape now fails explicitly before length assertions can be skipped. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_string = (): void => {
  const unit = typia.json.schema<string>();
  const schema = unit.schema;

  TestValidator.predicate("is string type", () =>
    OpenApiTypeChecker.isString(schema),
  );

  // string with format
  const emailUnit = typia.json.schema<string & tags.Format<"email">>();
  const email = emailUnit.schema;
  TestValidator.predicate("email is string", () =>
    OpenApiTypeChecker.isString(email),
  );
  if (OpenApiTypeChecker.isString(email)) {
    TestEquality.equals("email format", email.format, "email");
  }

  // string with pattern
  const patternUnit = typia.json.schema<string & tags.Pattern<"^[a-z]+$">>();
  const pattern = patternUnit.schema;
  TestValidator.predicate("pattern is string", () =>
    OpenApiTypeChecker.isString(pattern),
  );
  if (OpenApiTypeChecker.isString(pattern)) {
    TestEquality.equals("pattern value", pattern.pattern, "^[a-z]+$");
  }

  // string with length constraints
  const constrainedUnit = typia.json.schema<
    string & tags.MinLength<1> & tags.MaxLength<100>
  >();
  const constrained = constrainedUnit.schema;
  TestValidator.predicate("constrained value is string", () =>
    OpenApiTypeChecker.isString(constrained),
  );
  if (OpenApiTypeChecker.isString(constrained)) {
    TestEquality.equals("minLength", constrained.minLength, 1);
    TestEquality.equals("maxLength", constrained.maxLength, 100);
  }
};
