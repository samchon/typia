import { IJsonSchemaCollection, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia from "typia";

/**
 * Verifies the native root description of referenced parameters cascades like
 * `LlmSchemaConverter.parameters`.
 *
 * The converter describes a `$ref` root with `JsonDescriptor.cascade`: the
 * type's own description, then the quoted description of the type itself and of
 * each described namespace parent, or `Current Type: {@link Name}` for an
 * undescribed type. The native transform kept only the dereferenced type's own
 * description, so the two paths disagreed on the root (#2405). Parity alone
 * would pass if both drifted together, so the cascade is pinned verbatim too. A
 * parent contributes only when it is in the same components, so the child
 * references it, and each type is converted from its own collection, the one
 * its native parameters see.
 *
 * 1. Convert an undescribed, a described, and a namespaced type both ways.
 * 2. Assert each native parameters schema equals the converter's.
 * 3. Assert each root description reads exactly as the cascade renders it.
 * 4. Assert structured output and application parameters carry the same cascade.
 *
 * @evidence contracts/testing.md#behavioral-verification Native parameters and TypeScript converter output agree for plain, documented and namespaced roots; complete literal cascade descriptions also match structured output and application consumers.
 * @evidence contracts/testing.md#independent-expectations The converter comparison shares native JSON metadata and can hide a common analysis error. The independently handwritten cascade strings, source JSDoc and explicit separators pin the description meaning before cross-producer equality is used.
 * @evidence contracts/testing.md#distinguishing-cases Undocumented root, described root and described namespace parent separate cascade branches; structuredOutput/application propagation uses the already literal-pinned child description. JSON cleaning compares serialized schema values only.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_parity_converter_namespace is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.json.schemas, typia.llm.parameters, typia.llm.structuredOutput, typia.llm.application through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.json.schemas, typia.llm.parameters, typia.llm.structuredOutput, typia.llm.application call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Undocumented root, described root and described namespace parent separate cascade branches; structuredOutput/application propagation uses the already literal-pinned child description. JSON cleaning compares serialized schema values only. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_parity_converter_namespace = (): void => {
  const collections: IJsonSchemaCollection[] = [
    typia.json.schemas<[IPlain]>(),
    typia.json.schemas<[IMember]>(),
    typia.json.schemas<[IMember.ICreate]>(),
  ];
  const actual = [
    typia.llm.parameters<IPlain>(),
    typia.llm.parameters<IMember>(),
    typia.llm.parameters<IMember.ICreate>(),
  ];
  collections.forEach((collection, i) => {
    const converted = LlmSchemaConverter.parameters({
      config: { strict: false },
      components: collection.components as OpenApi.IComponents,
      schema: collection.schemas[0] as
        | OpenApi.IJsonSchema.IObject
        | OpenApi.IJsonSchema.IReference,
    });
    if (converted.success === false)
      throw new Error(JSON.stringify(converted.error, null, 2));
    TestEquality.equals(
      `parameters[${i}]`,
      clean(actual[i]),
      clean(converted.value),
    );
  });

  TestEquality.equals(
    "descriptions",
    actual.map((p) => p.description),
    [
      "Current Type: {@link IPlain}",
      [
        "A member.",
        "Description of the current {@link IMember} type:\n\n> A member.",
      ].join(SEPARATOR),
      [
        "Creation input.",
        "Description of the current {@link IMember.ICreate} type:\n\n> Creation input.",
        "Description of the parent {@link IMember} type:\n\n> A member.",
      ].join(SEPARATOR),
    ],
  );

  // the other parameters roots share the same builders
  TestEquality.equals(
    "structuredOutput and application",
    [actual[2]!.description, actual[2]!.description],
    [
      typia.llm.structuredOutput<IMember.ICreate>().parameters.description,
      typia.llm.application<IController>().functions[0]?.parameters.description,
    ],
  );
};

const SEPARATOR = "\n\n------------------------------\n\n";

interface IPlain {
  id: string;
}

/** A member. */
interface IMember {
  id: string;
  name: string;
}
namespace IMember {
  /** Creation input. */
  export interface ICreate {
    name: string;
    referrer: IMember | null;
  }
}

interface IController {
  create(input: IMember.ICreate): void;
}

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
