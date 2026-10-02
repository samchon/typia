import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies the named Status schema retains a reference and a string enum
 * definition with three members including pending, with an explicit definition
 * type guard.
 *
 * Named reference versus definition content are separately checked, and
 * missing/wrong-typed definitions cannot skip enum checks. Exact all-member
 * comparison remains in schema_spec_string and converter_matrix.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The named Status schema retains a reference and a string enum definition with three members including pending, with an explicit definition type guard.
 * @evidence contracts/testing.md#independent-expectations The authored three-string union independently determines enum cardinality and pending membership; another generated schema is not the expectation.
 * @evidence contracts/testing.md#distinguishing-cases Named reference versus definition content are separately checked, and missing/wrong-typed definitions cannot skip enum checks. Exact all-member comparison remains in schema_spec_string and converter_matrix.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_enum is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Named reference versus definition content are separately checked, and missing/wrong-typed definitions cannot skip enum checks. Exact all-member comparison remains in schema_spec_string and converter_matrix. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_enum = (): void => {
  type Status = "pending" | "active" | "completed";

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<Status>($defs);

  // named type returns $ref
  TestValidator.predicate("is reference", () =>
    LlmTypeChecker.isReference(schema),
  );

  const status = $defs["Status"];
  TestValidator.predicate(
    "status definition has the expected type",
    () => status !== undefined && LlmTypeChecker.isString(status),
  );
  if (status && LlmTypeChecker.isString(status)) {
    TestValidator.predicate(
      "has enum values",
      () => status.enum !== undefined && status.enum.length === 3,
    );
    TestValidator.predicate(
      "contains pending",
      () => status.enum?.includes("pending") ?? false,
    );
  }
};
