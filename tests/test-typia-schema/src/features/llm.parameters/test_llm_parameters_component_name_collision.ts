import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Foo as Alpha } from "../json.schema/ComponentNameCollisionAlpha";
import { Foo as Beta } from "../json.schema/ComponentNameCollisionBeta";
import { Foo as Gamma } from "../json.schema/ComponentNameCollisionGamma";

interface IArguments {
  a: Alpha;
  b: Beta;
  c: Gamma.o1;
}

/**
 * Verifies a minted `$defs` key never squats a real type's own name.
 *
 * The LLM generator builds its own metadata collection and normalizes names
 * through a different replacer than the OpenAPI generator, so it is a genuinely
 * independent surface for the same root cause rather than a second view of one
 * document. The allocator used to mint `<Base>.o<N>` without checking that id
 * against the ids already handed out, which collapsed the real `namespace Foo {
 * interface o1 }` member and a second `Foo` onto one `$defs` key. The model was
 * then handed one type's shape under two parameters, and typia's own runtime
 * validator rejected what the model produced for the other.
 *
 * 1. Generate LLM parameters referencing three colliding types.
 * 2. Assert each parameter carries a distinct local reference.
 * 3. Assert every referenced definition exists and owns its own property.
 *
 * @evidence contracts/testing.md#behavioral-verification Three imported Foo-related types produce three distinct references and definitions, each resolving to its own a/b/c property rather than a minted key overwriting a real type.
 * @evidence contracts/testing.md#independent-expectations The three authored imported declaration shapes independently determine the expected cardinality and property ownership. The reference decoder follows URI/JSON Pointer token rules to inspect the actual target.
 * @evidence contracts/testing.md#distinguishing-cases Same-name imported types versus namespace Foo.o1 expose the allocator collision. Distinct reference count, definition count and resolved property ownership are all required; counting references alone is insufficient.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_component_name_collision is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Same-name imported types versus namespace Foo.o1 expose the allocator collision. Distinct reference count, definition count and resolved property ownership are all required; counting references alone is insufficient. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_component_name_collision = (): void => {
  const parameters: ILlmSchema.IParameters = typia.llm.parameters<IArguments>();

  // 1. EVERY PARAMETER OWNS A DISTINCT REFERENCE
  const $ref = (key: string): string =>
    (parameters.properties?.[key] as ILlmSchema.IReference | undefined)?.$ref ??
    "";
  const refs: string[] = ["a", "b", "c"].map($ref);
  TestEquality.equals(
    "each colliding type owns a distinct local reference",
    3,
    new Set(refs).size,
  );

  // 2. THREE DISTINCT TYPES KEEP THREE DEFINITIONS
  TestEquality.equals(
    "three distinct types allocate three definitions",
    3,
    Object.keys(parameters.$defs ?? {}).length,
  );

  // 3. EVERY REFERENCE RESOLVES TO ITS OWN DEFINITION
  const expected: Array<[string, string]> = [
    ["a", "a"],
    ["b", "b"],
    ["c", "c"],
  ];
  for (const [accessor, property] of expected) {
    const definition = (parameters.$defs ?? {})[
      decodeURIComponent($ref(accessor).split("/").at(-1)!)
        .split("~1")
        .join("/")
        .split("~0")
        .join("~")
    ] as ILlmSchema.IObject | undefined;
    TestValidator.predicate(
      `${accessor} resolves to the definition owning its own ${property} property`,
      () =>
        definition !== undefined &&
        Object.prototype.hasOwnProperty.call(
          definition.properties ?? {},
          property,
        ),
    );
  }
};
