import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies strict native string schemas match complete literals for the
 * format-bearing constraint set and the separately supported pattern-bearing
 * set.
 *
 * Formatted/default/media/length constraints versus standalone pattern preserve
 * both supported paths without constructing an invalid tag combination;
 * complete equality checks removed raw keywords as well as shifted text.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Strict native string schemas match complete literals for the format-bearing constraint set and the separately supported pattern-bearing set.
 * @evidence contracts/testing.md#independent-expectations The handwritten length/format/media/default and pattern description lines follow the source tags and strict shift contract. Format and Pattern are intentionally tested separately because their tags are mutually exclusive.
 * @evidence contracts/testing.md#distinguishing-cases Formatted/default/media/length constraints versus standalone pattern preserve both supported paths without constructing an invalid tag combination; complete equality checks removed raw keywords as well as shifted text.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_spec_strict_string is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Formatted/default/media/length constraints versus standalone pattern preserve both supported paths without constructing an invalid tag combination; complete equality checks removed raw keywords as well as shifted text. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_spec_strict_string = (): void => {
  // Format and Pattern are mutually exclusive tags, so the format-bearing and
  // pattern-bearing constraint sets are shifted on two separate strings; both
  // still verify that strict mode moves every string keyword into the
  // description.
  TestEquality.equals(
    "strict string shifts format constraints",
    clean(
      typia.llm.schema<
        string &
          tags.Format<"uuid"> &
          tags.MinLength<36> &
          tags.MaxLength<36> &
          tags.ContentMediaType<"text/plain"> &
          tags.Default<"00000000-0000-0000-0000-000000000000">,
        { strict: true }
      >({}),
    ),
    {
      type: "string",
      description: [
        "@minLength 36",
        "@maxLength 36",
        "@format uuid",
        "@contentMediaType text/plain",
        "@default 00000000-0000-0000-0000-000000000000",
      ].join("\n"),
    },
  );
  TestEquality.equals(
    "strict string shifts pattern constraint",
    clean(
      typia.llm.schema<string & tags.Pattern<"^[0-9a-f-]+$">, { strict: true }>(
        {},
      ),
    ),
    {
      type: "string",
      description: "@pattern ^[0-9a-f-]+$",
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
