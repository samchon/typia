import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies native strings match literal broad, formatted, patterned, bounded,
 * content-media, default and three-member literal-union schemas.
 *
 * Plain versus each tag family and broad versus literal string restrictions
 * retain separate inputs. Full equality catches missing/extra fields while enum
 * projection intentionally does not certify unrelated metadata.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native strings match literal broad, formatted, patterned, bounded, content-media, default and three-member literal-union schemas.
 * @evidence contracts/testing.md#independent-expectations Each expected object is handwritten from the declared tag values and literal union. enumSchema sorts membership only and does not produce expected strings from output.
 * @evidence contracts/testing.md#distinguishing-cases Plain versus each tag family and broad versus literal string restrictions retain separate inputs. Full equality catches missing/extra fields while enum projection intentionally does not certify unrelated metadata.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_spec_string is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Plain versus each tag family and broad versus literal string restrictions retain separate inputs. Full equality catches missing/extra fields while enum projection intentionally does not certify unrelated metadata. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_spec_string = (): void => {
  TestEquality.equals("string", clean(typia.llm.schema<string>({})), {
    type: "string",
  });
  TestEquality.equals(
    "format",
    clean(typia.llm.schema<string & tags.Format<"email">>({})),
    {
      type: "string",
      format: "email",
    },
  );
  TestEquality.equals(
    "pattern",
    clean(typia.llm.schema<string & tags.Pattern<"^[a-z]+$">>({})),
    {
      type: "string",
      pattern: "^[a-z]+$",
    },
  );
  TestEquality.equals(
    "length",
    clean(typia.llm.schema<string & tags.MinLength<2> & tags.MaxLength<8>>({})),
    {
      type: "string",
      minLength: 2,
      maxLength: 8,
    },
  );
  TestEquality.equals(
    "content media type",
    clean(typia.llm.schema<string & tags.ContentMediaType<"image/png">>({})),
    {
      type: "string",
      contentMediaType: "image/png",
    },
  );
  TestEquality.equals(
    "default",
    clean(typia.llm.schema<string & tags.Default<"guest">>({})),
    {
      type: "string",
      default: "guest",
    },
  );
  TestEquality.equals(
    "string literal union",
    enumSchema(typia.llm.schema<"alpha" | "beta" | "gamma">({})),
    {
      type: "string",
      enum: ["alpha", "beta", "gamma"],
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const enumSchema = (
  schema: ILlmSchema,
): { type: string | undefined; enum: unknown[] } => ({
  type: (schema as { type?: string }).type,
  enum: [...((schema as { enum?: unknown[] }).enum ?? [])].sort(),
});
