import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies native string parameters retain basic/email/pattern/length
 * properties and required membership, with explicit string shapes before
 * format, pattern and length comparisons.
 *
 * Plain versus formatted/patterned/bounded string fields remain separate.
 * Pattern and length can no longer skip keyword checks when emitted with a
 * wrong schema kind.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native string parameters retain basic/email/pattern/length properties and required membership, with explicit string shapes before format, pattern and length comparisons.
 * @evidence contracts/testing.md#independent-expectations The local Format<email>, Pattern and 1/100 length tags independently determine the handwritten keyword values; required names come from IInput.
 * @evidence contracts/testing.md#distinguishing-cases Plain versus formatted/patterned/bounded string fields remain separate. Pattern and length can no longer skip keyword checks when emitted with a wrong schema kind.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_string is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Plain versus formatted/patterned/bounded string fields remain separate. Pattern and length can no longer skip keyword checks when emitted with a wrong schema kind. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_string = (): void => {
  interface IInput {
    basic: string;
    email: string & tags.Format<"email">;
    pattern: string & tags.Pattern<"^[a-z]+$">;
    length: string & tags.MinLength<1> & tags.MaxLength<100>;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  // parameters should be object with additionalProperties: false
  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );
  TestValidator.predicate("has $defs", () => params.$defs !== undefined);

  // check properties exist
  TestValidator.predicate("has basic", () => "basic" in params.properties);
  TestValidator.predicate("has email", () => "email" in params.properties);
  TestValidator.predicate("has pattern", () => "pattern" in params.properties);
  TestValidator.predicate("has length", () => "length" in params.properties);

  // all should be required
  TestValidator.predicate(
    "basic is required",
    () => params.required?.includes("basic") ?? false,
  );
  TestValidator.predicate(
    "email is required",
    () => params.required?.includes("email") ?? false,
  );

  // check basic string
  const basic = params.properties["basic"];
  TestValidator.predicate("basic is string", () =>
    LlmTypeChecker.isString(basic!),
  );

  // check email format
  const email = params.properties["email"];
  TestValidator.predicate("email is string", () =>
    LlmTypeChecker.isString(email!),
  );
  if (LlmTypeChecker.isString(email!)) {
    TestEquality.equals("email format", email.format, "email");
  }

  // check pattern
  const pattern = params.properties["pattern"];
  TestValidator.predicate("pattern schema has the expected type", () =>
    LlmTypeChecker.isString(pattern!),
  );
  if (LlmTypeChecker.isString(pattern!)) {
    TestEquality.equals("pattern value", pattern.pattern, "^[a-z]+$");
  }

  // check length constraints
  const length = params.properties["length"];
  TestValidator.predicate("length schema has the expected type", () =>
    LlmTypeChecker.isString(length!),
  );
  if (LlmTypeChecker.isString(length!)) {
    TestEquality.equals("minLength", length.minLength, 1);
    TestEquality.equals("maxLength", length.maxLength, 100);
  }
};
