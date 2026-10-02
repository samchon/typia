import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies generated numeric parameters preserve ordinary versus int32 kinds
 * and inclusive/exclusive bounds plus multipleOf, with required numeric shapes
 * before keyword assertions.
 *
 * Plain number, integer, inclusive versus exclusive ranges and multiplicity
 * remain separate. New shape predicates prevent a changed node kind from
 * silently bypassing any tag comparison.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Generated numeric parameters preserve ordinary versus int32 kinds and inclusive/exclusive bounds plus multipleOf, with required numeric shapes before keyword assertions.
 * @evidence contracts/testing.md#independent-expectations IInput number tags independently determine number/integer, 0/100 bounds and multipleOf 5. Literal expected keyword values are authored rather than read from a second generated schema.
 * @evidence contracts/testing.md#distinguishing-cases Plain number, integer, inclusive versus exclusive ranges and multiplicity remain separate. New shape predicates prevent a changed node kind from silently bypassing any tag comparison.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_number is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Plain number, integer, inclusive versus exclusive ranges and multiplicity remain separate. New shape predicates prevent a changed node kind from silently bypassing any tag comparison. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_number = (): void => {
  interface IInput {
    basic: number;
    integer: number & tags.Type<"int32">;
    ranged: number & tags.Minimum<0> & tags.Maximum<100>;
    exclusive: number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>;
    multiple: number & tags.MultipleOf<5>;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check basic number
  const basic = params.properties["basic"];
  TestValidator.predicate("basic is number", () =>
    LlmTypeChecker.isNumber(basic!),
  );

  // check integer
  const integer = params.properties["integer"];
  TestValidator.predicate("integer is integer type", () =>
    LlmTypeChecker.isInteger(integer!),
  );

  // check ranged
  const ranged = params.properties["ranged"];
  TestValidator.predicate("ranged schema has the expected type", () =>
    LlmTypeChecker.isNumber(ranged!),
  );
  if (LlmTypeChecker.isNumber(ranged!)) {
    TestEquality.equals("minimum", ranged.minimum, 0);
    TestEquality.equals("maximum", ranged.maximum, 100);
  }

  // check exclusive
  const exclusive = params.properties["exclusive"];
  TestValidator.predicate("exclusive schema has the expected type", () =>
    LlmTypeChecker.isNumber(exclusive!),
  );
  if (LlmTypeChecker.isNumber(exclusive!)) {
    TestEquality.equals("exclusiveMinimum", exclusive.exclusiveMinimum, 0);
    TestEquality.equals("exclusiveMaximum", exclusive.exclusiveMaximum, 100);
  }

  // check multipleOf
  const multiple = params.properties["multiple"];
  TestValidator.predicate("multiple schema has the expected type", () =>
    LlmTypeChecker.isNumber(multiple!),
  );
  if (LlmTypeChecker.isNumber(multiple!)) {
    TestEquality.equals("multipleOf", multiple.multipleOf, 5);
  }
};
