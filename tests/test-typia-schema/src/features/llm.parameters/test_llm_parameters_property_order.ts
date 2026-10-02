import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies typia.llm.parameters preserves interface property order.
 *
 * Locks the object-property emission order used by LLM parameter schemas.
 * JavaScript observes JSON schema object properties through insertion order, so
 * a metadata traversal regression could reorder the prompt-facing shape.
 *
 * 1. Declare plain, tagged, extended, and intersection object types.
 * 2. Call typia.llm.parameters for each interface.
 * 3. Assert properties and required arrays follow declaration order.
 *
 * @evidence contracts/testing.md#behavioral-verification Native plain, tagged, inherited and intersection parameter schemas expose properties and required arrays in the complete authored declaration order.
 * @evidence contracts/testing.md#independent-expectations Expected name arrays are handwritten from the ordered source declarations, including base-before-derived and left/bridge/right intersection order. Object.keys observes real insertion order independently of metadata traversal.
 * @evidence contracts/testing.md#distinguishing-cases Plain fields, tag-bearing fields, interface inheritance and three-part intersection each retain both property and required order checks; sorting would erase the distinction and is not used.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_property_order is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Plain fields, tag-bearing fields, interface inheritance and three-part intersection each retain both property and required order checks; sorting would erase the distinction and is not used. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_property_order = (): void => {
  interface IBase {
    baseFirst: string;
    baseSecond: number;
  }
  interface IPlain {
    first: string;
    second: number;
    third: boolean;
  }
  interface IMember {
    id: string & tags.Format<"uuid">;
    email: string & tags.Format<"email">;
    age: number &
      tags.Type<"uint32"> &
      tags.ExclusiveMinimum<19> &
      tags.Maximum<100>;
  }
  interface IDerived extends IBase {
    ownFirst: boolean;
    ownSecond: string[];
  }
  interface IBridge {
    bridgeFirst: boolean;
    bridgeSecond: string & tags.Format<"email">;
  }
  type IIntersected = {
    leftFirst: string & tags.Format<"uuid">;
    leftSecond: number & tags.Type<"uint32">;
  } & IBridge & {
      rightFirst: string;
      rightSecond: number &
        tags.Type<"uint32"> &
        tags.ExclusiveMinimum<19> &
        tags.Maximum<100>;
    };

  const plain: ILlmSchema.IParameters = typia.llm.parameters<IPlain>();
  const member: ILlmSchema.IParameters = typia.llm.parameters<IMember>();
  const derived: ILlmSchema.IParameters = typia.llm.parameters<IDerived>();
  const intersected: ILlmSchema.IParameters =
    typia.llm.parameters<IIntersected>();

  TestEquality.equals("plain properties", Object.keys(plain.properties), [
    "first",
    "second",
    "third",
  ]);
  TestEquality.equals("plain required", plain.required, [
    "first",
    "second",
    "third",
  ]);
  TestEquality.equals("tagged properties", Object.keys(member.properties), [
    "id",
    "email",
    "age",
  ]);
  TestEquality.equals("tagged required", member.required, [
    "id",
    "email",
    "age",
  ]);
  TestEquality.equals("derived properties", Object.keys(derived.properties), [
    "baseFirst",
    "baseSecond",
    "ownFirst",
    "ownSecond",
  ]);
  TestEquality.equals("derived required", derived.required, [
    "baseFirst",
    "baseSecond",
    "ownFirst",
    "ownSecond",
  ]);
  TestEquality.equals(
    "intersected properties",
    Object.keys(intersected.properties),
    [
      "leftFirst",
      "leftSecond",
      "bridgeFirst",
      "bridgeSecond",
      "rightFirst",
      "rightSecond",
    ],
  );
  TestEquality.equals("intersected required", intersected.required, [
    "leftFirst",
    "leftSecond",
    "bridgeFirst",
    "bridgeSecond",
    "rightFirst",
    "rightSecond",
  ]);
};
