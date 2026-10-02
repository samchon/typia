import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies a strict `default` survives the shift-then-invert round trip.
 *
 * Under `strict`, the write half moves `default` into the description as a
 * `@default value` tag; inversion must read it back as a keyword rather than
 * leave it behind as prose. The numeric path used to drop `default` on the
 * write side and no reader restored it on either path, so a numeric default was
 * lost outright and a string default leaked as literal `@default …` text. This
 * pins both directions: the tag is emitted on write and restored on read, for
 * numeric and string alike.
 *
 * 1. Build strict LLM schemas for a numeric and a string property, each with a
 *    `Default` alongside another constraint.
 * 2. Invert each under `strict`.
 * 3. Assert `default` is restored to a keyword and the tag is consumed from the
 *    description.
 *
 * @evidence contracts/testing.md#behavioral-verification Strict native number/string schemas connect to TypeScript inversion, which restores defaults 7/body and minimum/minLength while consuming shifted tag-only descriptions.
 * @evidence contracts/testing.md#independent-expectations The local Minimum<1>/Default<7> and MinLength<2>/Default<body> declarations independently determine restored keyword literals and the absence of remaining tag prose. A round-trip result alone would be insufficient without these pinned fragments.
 * @evidence contracts/testing.md#distinguishing-cases Numeric and string defaults exercise both shifter/inverter paths, with a neighboring constraint on each and description consumption; no expected schema is produced by inversion itself.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_invert_default_round_trip is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Numeric and string defaults exercise both shifter/inverter paths, with a neighboring constraint on each and description consumption; no expected schema is produced by inversion itself. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_invert_default_round_trip = (): void => {
  const numeric = typia.llm.schema<
    number & tags.Minimum<1> & tags.Default<7>,
    { strict: true }
  >({});
  const numericInverted = LlmSchemaConverter.invert({
    config: { strict: true },
    components: {},
    schema: numeric,
    $defs: {},
  }) as OpenApi.IJsonSchema.INumber;
  TestEquality.equals("numeric default restored", numericInverted.default, 7);
  TestEquality.equals("numeric minimum restored", numericInverted.minimum, 1);
  TestEquality.equals(
    "numeric tags consumed",
    numericInverted.description,
    undefined,
  );

  const string = typia.llm.schema<
    string & tags.MinLength<2> & tags.Default<"body">,
    { strict: true }
  >({});
  const stringInverted = LlmSchemaConverter.invert({
    config: { strict: true },
    components: {},
    schema: string,
    $defs: {},
  }) as OpenApi.IJsonSchema.IString;
  TestEquality.equals(
    "string default restored",
    stringInverted.default,
    "body",
  );
  TestEquality.equals("string minLength restored", stringInverted.minLength, 2);
  TestEquality.equals(
    "string tags consumed",
    stringInverted.description,
    undefined,
  );
};
