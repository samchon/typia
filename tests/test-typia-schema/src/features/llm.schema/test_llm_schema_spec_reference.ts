import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies native recursive INode generation matches its literal root reference
 * and full definition containing optional direct recursion and required
 * recursive array children.
 *
 * Direct optional next versus array items recursion, scalar value and required
 * children preserve different paths; full equality catches incorrect recursion
 * targets, missing fields and lost optionality.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native recursive INode generation matches its literal root reference and full definition containing optional direct recursion and required recursive array children.
 * @evidence contracts/testing.md#independent-expectations The expected #/$defs/INode paths, value type and required membership are handwritten from the local recursive declaration.
 * @evidence contracts/testing.md#distinguishing-cases Direct optional next versus array items recursion, scalar value and required children preserve different paths; full equality catches incorrect recursion targets, missing fields and lost optionality.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_spec_reference is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Direct optional next versus array items recursion, scalar value and required children preserve different paths; full equality catches incorrect recursion targets, missing fields and lost optionality. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_spec_reference = (): void => {
  interface INode {
    value: string;
    next?: INode;
    children: INode[];
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<INode>($defs);
  TestEquality.equals("recursive top ref", clean(schema), {
    $ref: "#/$defs/INode",
  });
  TestEquality.equals("recursive definition", clean($defs.INode), {
    type: "object",
    properties: {
      children: {
        type: "array",
        items: {
          $ref: "#/$defs/INode",
        },
      },
      next: {
        $ref: "#/$defs/INode",
      },
      value: {
        type: "string",
      },
    },
    required: ["value", "children"],
    additionalProperties: false,
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
