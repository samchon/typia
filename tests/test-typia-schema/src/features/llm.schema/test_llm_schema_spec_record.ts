import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies a native tagged string Record emits a local reference and complete
 * dynamic-value object definition with minLength 1 and no named required
 * properties.
 *
 * Dynamic additionalProperties schema, empty named properties and explicit
 * empty required array differ from closed named objects. Full definition
 * equality pins value constraints beyond mere reference presence.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification A native tagged string Record emits a local reference and complete dynamic-value object definition with minLength 1 and no named required properties.
 * @evidence contracts/testing.md#independent-expectations The declaration Record<string,string&MinLength<1>> independently requires the handwritten object/value schema. The generated definition key is reused only to link its emitted reference; key spelling itself is intentionally not asserted.
 * @evidence contracts/testing.md#distinguishing-cases Dynamic additionalProperties schema, empty named properties and explicit empty required array differ from closed named objects. Full definition equality pins value constraints beyond mere reference presence.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_spec_record is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Dynamic additionalProperties schema, empty named properties and explicit empty required array differ from closed named objects. Full definition equality pins value constraints beyond mere reference presence. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_spec_record = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema =
    typia.llm.schema<Record<string, string & tags.MinLength<1>>>($defs);
  const key = Object.keys($defs)[0]!;

  TestEquality.equals("record top ref", clean(schema), {
    $ref: `#/$defs/${key}`,
  });
  TestEquality.equals("record string value", clean($defs[key]), {
    type: "object",
    properties: {},
    additionalProperties: {
      type: "string",
      minLength: 1,
    },
    required: [],
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
