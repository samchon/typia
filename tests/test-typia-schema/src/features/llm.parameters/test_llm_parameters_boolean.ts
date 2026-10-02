import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies native parameters expose two boolean properties, mark both required
 * and disallow surplus object properties.
 *
 * Both declared booleans and required membership are observed. Wrong scalar,
 * optionality and nullable branches are distinguished by sibling
 * parameter_string/number/nullable cases rather than repeated here.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native parameters expose two boolean properties, mark both required and disallow surplus object properties.
 * @evidence contracts/testing.md#independent-expectations IInput declares active/enabled as required booleans; the handwritten property names and false additionalProperties expectation do not come from another producer.
 * @evidence contracts/testing.md#distinguishing-cases Both declared booleans and required membership are observed. Wrong scalar, optionality and nullable branches are distinguished by sibling parameter_string/number/nullable cases rather than repeated here.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_boolean is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Both declared booleans and required membership are observed. Wrong scalar, optionality and nullable branches are distinguished by sibling parameter_string/number/nullable cases rather than repeated here. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_boolean = (): void => {
  interface IInput {
    active: boolean;
    enabled: boolean;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check active
  const active = params.properties["active"];
  TestValidator.predicate("active is boolean", () =>
    LlmTypeChecker.isBoolean(active!),
  );

  // check enabled
  const enabled = params.properties["enabled"];
  TestValidator.predicate("enabled is boolean", () =>
    LlmTypeChecker.isBoolean(enabled!),
  );

  // all required
  TestValidator.predicate(
    "active is required",
    () => params.required?.includes("active") ?? false,
  );
  TestValidator.predicate(
    "enabled is required",
    () => params.required?.includes("enabled") ?? false,
  );
};
