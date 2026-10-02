import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies array constraints preserve their values in schemas and validators.
 *
 * Array tags apply to the array wrapper. Disabling uniqueness must allow
 * duplicates at runtime and publish that same permission in JSON Schema.
 *
 * 1. Assert untagged string arrays and their item schema.
 * 2. Preserve minimum, maximum and enabled/disabled uniqueness annotations.
 * 3. Compare duplicate, distinct and empty inputs with both uniqueness flags.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual json.schema output must contain array/item types and the authored MinItems, MaxItems and UniqueItems values. Generated is predicates must reject duplicate strings only when uniqueness is enabled; missing array output fails before any conditional field assertion can be skipped.
 * @evidence contracts/testing.md#independent-expectations Literal type declarations establish string items and bounds 1/10. JSON Schema uniqueItems:false permits duplicates, and the tag's Boolean parameter disables the runtime constraint. Expected verdicts are authored independently for equal strings, distinct strings and empty arrays.
 * @evidence contracts/testing.md#distinguishing-cases Untagged arrays omit uniqueness, enabled and disabled tags differ by one Boolean flag, and duplicate/distinct/empty values distinguish uniqueness from blanket rejection. Other tests own array defaults and object-element comparisons.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers this exported case in test-typia-schema start. It is a native producer boundary whose schema and predicate calls are rewritten together in the suite project.
 * @evidence contracts/e2e.md#necessary-boundary Type-to-schema and type-to-predicate emission must agree on the public tag's Boolean value. Direct calls to the duplicate-comparison helper cannot detect a tag metadata or schema emission error.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema suite process and project, sharing its content-keyed plugin artifact. It starts no compiler subprocess or separate fixture installation for each flag or input.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity All schemas, predicates and authored arrays are local to this invocation. The case changes no shared fixture or process state; ttsc owns plugin invalidation, and this case asserts no cold-cache transition.
 * @evidence contracts/e2e.md#preserved-coverage Existing string-item, minimum, maximum and enabled-uniqueness assertions remain. Explicit shape failures strengthen the old guarded checks; disabled/untagged annotations and runtime duplicate controls add the previously absent distinction.
 */
export const test_json_schema_array = (): void => {
  const unit = typia.json.schema<string[]>();
  const schema = unit.schema;

  TestValidator.predicate("is array type", () =>
    OpenApiTypeChecker.isArray(schema),
  );
  if (!OpenApiTypeChecker.isArray(schema))
    throw new Error("untagged schema must be an array");

  if (OpenApiTypeChecker.isArray(schema)) {
    TestValidator.predicate("items is string", () =>
      OpenApiTypeChecker.isString(schema.items),
    );
  }

  // array with constraints
  const constrainedUnit = typia.json.schema<
    string[] & tags.MinItems<1> & tags.MaxItems<10>
  >();
  const constrained = constrainedUnit.schema;
  if (!OpenApiTypeChecker.isArray(constrained))
    throw new Error("constrained schema must be an array");
  if (OpenApiTypeChecker.isArray(constrained)) {
    TestEquality.equals("minItems", constrained.minItems, 1);
    TestEquality.equals("maxItems", constrained.maxItems, 10);
  }

  // unique items
  const uniqueUnit = typia.json.schema<
    (string & tags.Format<"uuid">)[] & tags.UniqueItems
  >();
  const unique = uniqueUnit.schema;
  if (!OpenApiTypeChecker.isArray(unique))
    throw new Error("unique schema must be an array");
  if (OpenApiTypeChecker.isArray(unique)) {
    TestEquality.equals("uniqueItems", unique.uniqueItems, true);
  }

  TestEquality.equals("untagged uniqueness", schema.uniqueItems, undefined);
  const disabled = typia.json.schema<string[] & tags.UniqueItems<false>>()
    .schema;
  if (!OpenApiTypeChecker.isArray(disabled))
    throw new Error("disabled uniqueness schema must be an array");
  TestEquality.equals("disabled uniqueness", disabled.uniqueItems, false);

  const enabledPredicate = typia.createIs<string[] & tags.UniqueItems>();
  const disabledPredicate = typia.createIs<
    string[] & tags.UniqueItems<false>
  >();
  for (const [input, enabled] of [
    [["same", "same"], false],
    [["first", "second"], true],
    [[], true],
  ] as const) {
    TestEquality.equals(
      "enabled uniqueness verdict",
      enabledPredicate(input),
      enabled,
    );
    TestEquality.equals(
      "disabled uniqueness verdict",
      disabledPredicate(input),
      true,
    );
  }
};
