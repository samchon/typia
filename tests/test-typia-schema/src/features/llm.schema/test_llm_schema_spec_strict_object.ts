import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies strict native root/child definitions match complete literals, with
 * child reference documentation removed from the reference and quoted onto the
 * owner description.
 *
 * Root versus nested objects, bare child reference, relocated multi-paragraph
 * documentation and closed required shells remain independently compared; prose
 * relocation cannot pass by retaining only the property schema.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Strict native root/child definitions match complete literals, with child reference documentation removed from the reference and quoted onto the owner description.
 * @evidence contracts/testing.md#independent-expectations The reference identities, required names and complete quoted owner prose are handwritten from the two interfaces and child-property JSDoc.
 * @evidence contracts/testing.md#distinguishing-cases Root versus nested objects, bare child reference, relocated multi-paragraph documentation and closed required shells remain independently compared; prose relocation cannot pass by retaining only the property schema.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_spec_strict_object is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Root versus nested objects, bare child reference, relocated multi-paragraph documentation and closed required shells remain independently compared; prose relocation cannot pass by retaining only the property schema. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_spec_strict_object = (): void => {
  interface IStrictChild {
    value: string;
  }
  interface IStrictObject {
    /**
     * Child description.
     *
     * It must be cascaded to owner object.
     */
    child: IStrictChild;
    name: string;
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IStrictObject, { strict: true }>($defs);

  TestEquality.equals("strict object top ref", clean(schema), {
    $ref: "#/$defs/IStrictObject",
  });
  TestEquality.equals(
    "strict child ref has no description",
    clean($defs.IStrictObject),
    {
      type: "object",
      properties: {
        child: {
          $ref: "#/$defs/IStrictChild",
        },
        name: {
          type: "string",
        },
      },
      required: ["child", "name"],
      additionalProperties: false,
      description: [
        "### Description of {@link child} property:",
        "",
        "> Child description.",
        "> ",
        "> It must be cascaded to owner object.",
      ].join("\n"),
    },
  );
  TestEquality.equals("strict nested object", clean($defs.IStrictChild), {
    type: "object",
    properties: {
      value: {
        type: "string",
      },
    },
    required: ["value"],
    additionalProperties: false,
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
