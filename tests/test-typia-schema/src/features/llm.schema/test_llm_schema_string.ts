import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies native string schemas retain plain, email-format, pattern and
 * bounded-length variants, explicitly requiring the tagged results to remain
 * strings.
 *
 * Plain/formatted/patterned/bounded inputs remain separate. New pattern/length
 * shape guards ensure wrong schema kinds cannot bypass keyword assertions.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native string schemas retain plain, email-format, pattern and bounded-length variants, explicitly requiring the tagged results to remain strings.
 * @evidence contracts/testing.md#independent-expectations The local Format<email>, Pattern<^[a-z]+$> and MinLength<1>/MaxLength<100> independently determine the handwritten keyword values.
 * @evidence contracts/testing.md#distinguishing-cases Plain/formatted/patterned/bounded inputs remain separate. New pattern/length shape guards ensure wrong schema kinds cannot bypass keyword assertions.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_string is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Plain/formatted/patterned/bounded inputs remain separate. New pattern/length shape guards ensure wrong schema kinds cannot bypass keyword assertions. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_string = (): void => {
  const schema = typia.llm.schema<string>({});

  TestValidator.predicate("is string type", () =>
    LlmTypeChecker.isString(schema),
  );

  // string with format
  const email = typia.llm.schema<string & tags.Format<"email">>({});
  TestValidator.predicate("email is string", () =>
    LlmTypeChecker.isString(email),
  );
  if (LlmTypeChecker.isString(email)) {
    TestEquality.equals("email format", email.format, "email");
  }

  // string with pattern
  const pattern = typia.llm.schema<string & tags.Pattern<"^[a-z]+$">>({});
  TestValidator.predicate("pattern schema has the expected type", () =>
    LlmTypeChecker.isString(pattern),
  );
  if (LlmTypeChecker.isString(pattern)) {
    TestEquality.equals("pattern value", pattern.pattern, "^[a-z]+$");
  }

  // string with length constraints
  const constrained = typia.llm.schema<
    string & tags.MinLength<1> & tags.MaxLength<100>
  >({});
  TestValidator.predicate("constrained schema has the expected type", () =>
    LlmTypeChecker.isString(constrained),
  );
  if (LlmTypeChecker.isString(constrained)) {
    TestEquality.equals("minLength", constrained.minLength, 1);
    TestEquality.equals("maxLength", constrained.maxLength, 100);
  }
};
