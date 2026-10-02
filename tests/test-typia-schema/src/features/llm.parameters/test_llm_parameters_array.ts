import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies generated parameter properties retain string/number item types and
 * the limited array 1/10 bounds, with explicit shape checks before conditional
 * field assertions.
 *
 * Two distinct primitive item types and constrained versus ordinary arrays
 * share the same object parameter shell; the limited property cannot silently
 * skip its bound checks by changing schema kind.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Generated parameter properties retain string/number item types and the limited array 1/10 bounds, with explicit shape checks before conditional field assertions.
 * @evidence contracts/testing.md#independent-expectations The locally declared string[], number[] and MinItems<1>/MaxItems<10> independently determine item kinds and bounds.
 * @evidence contracts/testing.md#distinguishing-cases Two distinct primitive item types and constrained versus ordinary arrays share the same object parameter shell; the limited property cannot silently skip its bound checks by changing schema kind.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_array is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Two distinct primitive item types and constrained versus ordinary arrays share the same object parameter shell; the limited property cannot silently skip its bound checks by changing schema kind. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_array = (): void => {
  interface IInput {
    tags: string[];
    scores: number[];
    limited: string[] & tags.MinItems<1> & tags.MaxItems<10>;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check tags
  const tagsSchema = params.properties["tags"];
  TestValidator.predicate("tags is array", () =>
    LlmTypeChecker.isArray(tagsSchema!),
  );
  if (LlmTypeChecker.isArray(tagsSchema!)) {
    TestValidator.predicate("tags items is string", () =>
      LlmTypeChecker.isString(tagsSchema.items),
    );
  }

  // check scores
  const scores = params.properties["scores"];
  TestValidator.predicate("scores is array", () =>
    LlmTypeChecker.isArray(scores!),
  );
  if (LlmTypeChecker.isArray(scores!)) {
    TestValidator.predicate("scores items is number", () =>
      LlmTypeChecker.isNumber(scores.items),
    );
  }

  // check limited array constraints
  const limited = params.properties["limited"];
  TestValidator.predicate("limited schema has the expected type", () =>
    LlmTypeChecker.isArray(limited!),
  );
  if (LlmTypeChecker.isArray(limited!)) {
    TestEquality.equals("minItems", limited.minItems, 1);
    TestEquality.equals("maxItems", limited.maxItems, 10);
  }
};
