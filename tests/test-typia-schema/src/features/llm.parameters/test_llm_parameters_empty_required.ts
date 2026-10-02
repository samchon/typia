import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies LLM parameters keep empty object shell fields in every mode.
 *
 * Function-calling parameter schemas are object shells even when there are no
 * named properties. Default and strict generation both have to carry
 * `properties: {}`, `required: []`, and `additionalProperties: false`.
 *
 * 1. Generate default and strict parameters for an empty object interface.
 * 2. Read only the object-shell fields.
 * 3. Assert both empty shells are explicit.
 *
 * @evidence contracts/testing.md#behavioral-verification Default and strict native parameters for an empty interface retain explicit object, empty properties/required and false additionalProperties fields.
 * @evidence contracts/testing.md#independent-expectations The handwritten shell expectation follows the LLM parameter representation and the empty source interface independently of the emitter.
 * @evidence contracts/testing.md#distinguishing-cases The zero-property boundary is exercised under both config modes. Projection checks distinguish an explicit empty map/array from undefined, rather than permitting absent shell fields.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_empty_required is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. The zero-property boundary is exercised under both config modes. Projection checks distinguish an explicit empty map/array from undefined, rather than permitting absent shell fields. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_empty_required = (): void => {
  interface IEmptyParameters {}

  assertShell(
    "default empty parameters",
    typia.llm.parameters<IEmptyParameters>(),
  );

  assertShell(
    "strict empty parameters",
    typia.llm.parameters<IEmptyParameters, { strict: true }>(),
  );
};

const assertShell = (
  name: string,
  parameters: ILlmSchema.IParameters,
): void => {
  TestEquality.equals(
    name,
    {
      type: parameters.type,
      properties: parameters.properties,
      required: parameters.required,
      additionalProperties: parameters.additionalProperties,
    },
    {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
  );
};
