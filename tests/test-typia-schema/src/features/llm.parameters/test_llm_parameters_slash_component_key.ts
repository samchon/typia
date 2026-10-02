import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies a root type whose component key holds a slash still dereferences.
 *
 * A generic argument such as `"A/B"` puts a slash into the component key
 * `IVariantA/B`. The native parameters programmer took the key after the last
 * slash of the `$ref`, found no `B` component, and panicked the compiler with
 * "Unreachable code" for `llm.parameters` and `llm.structuredOutput`, while
 * `llm.application` left the parameters an undereferenced `$ref`.
 *
 * 1. Generate parameters, structured output, and application parameters for
 *    `IVariant<"A/B">`.
 * 2. Assert each is the dereferenced object carrying the key in its description.
 *
 * @evidence contracts/testing.md#behavioral-verification Parameters, structured output and application parameters all dereference IVariant<"A/B"> to the same complete independently authored object schema.
 * @evidence contracts/testing.md#independent-expectations The literal kind enum, value type, required names, empty definitions and Current Type description follow the generic source type and parameter contract rather than another generated output.
 * @evidence contracts/testing.md#distinguishing-cases Three public producer paths share the slash-bearing root witness, distinguishing canonical dereference from an unresolved reference or incorrect final slash segment.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_slash_component_key is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters, typia.llm.structuredOutput, typia.llm.application through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters, typia.llm.structuredOutput, typia.llm.application call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Three public producer paths share the slash-bearing root witness, distinguishing canonical dereference from an unresolved reference or incorrect final slash segment. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_slash_component_key = (): void => {
  const expected: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      kind: { type: "string", enum: ["A/B"] },
      value: { type: "number" },
    },
    required: ["kind", "value"],
    additionalProperties: false,
    description: "Current Type: {@link IVariantA/B}",
    $defs: {},
  };
  TestEquality.equals(
    "parameters",
    expected,
    typia.llm.parameters<IVariant<"A/B">>(),
  );
  TestEquality.equals(
    "structuredOutput",
    expected,
    typia.llm.structuredOutput<IVariant<"A/B">>().parameters,
  );
  TestEquality.equals(
    "application",
    expected,
    typia.llm.application<IController>().functions[0]?.parameters,
  );
};

interface IVariant<T extends string> {
  kind: T;
  value: number;
}
interface IController {
  run(input: IVariant<"A/B">): void;
}
