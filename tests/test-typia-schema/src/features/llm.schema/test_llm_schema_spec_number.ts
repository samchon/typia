import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies native numbers match complete handwritten
 * ordinary/integer/unsigned/float/range/multiple/default/strict/comment-tag
 * shapes and numeric literal membership.
 *
 * Signed/unsigned smaller widths, int32/uint32, float, inclusive/exclusive
 * ranges, multiplicity, default, strict description shift, comment/type tags
 * and numeric enum remain separate. equalsSchema performs symmetric
 * comparisons; enum sorting normalizes membership only.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native numbers match complete handwritten ordinary/integer/unsigned/float/range/multiple/default/strict/comment-tag shapes and numeric literal membership.
 * @evidence contracts/testing.md#independent-expectations The authored tags and source comments determine the expected JSON schema representation. Integer width tags require integer representation and unsigned minimum 0 here, not an invented bit-width range; literal expected schemas do not call production conversion.
 * @evidence contracts/testing.md#distinguishing-cases Signed/unsigned smaller widths, int32/uint32, float, inclusive/exclusive ranges, multiplicity, default, strict description shift, comment/type tags and numeric enum remain separate. equalsSchema performs symmetric comparisons; enum sorting normalizes membership only.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_spec_number is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Signed/unsigned smaller widths, int32/uint32, float, inclusive/exclusive ranges, multiplicity, default, strict description shift, comment/type tags and numeric enum remain separate. equalsSchema performs symmetric comparisons; enum sorting normalizes membership only. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_spec_number = (): void => {
  interface ICommentTypeNumbers {
    /** @type int8 */
    int8: number;

    /** @type uint8 */
    uint8: number;

    /** @type int16 */
    int16: number;

    /** @type uint16 */
    uint16: number;
  }

  equalsSchema("number", clean(typia.llm.schema<number>({})), {
    type: "number",
  });
  equalsSchema(
    "int32",
    clean(typia.llm.schema<number & tags.Type<"int32">>({})),
    {
      type: "integer",
    },
  );
  equalsSchema(
    "int8",
    clean(typia.llm.schema<number & tags.Type<"int8">>({})),
    {
      type: "integer",
    },
  );
  equalsSchema(
    "int16",
    clean(typia.llm.schema<number & tags.Type<"int16">>({})),
    {
      type: "integer",
    },
  );
  equalsSchema(
    "uint32",
    clean(typia.llm.schema<number & tags.Type<"uint32">>({})),
    {
      type: "integer",
      minimum: 0,
    },
  );
  equalsSchema(
    "uint8",
    clean(typia.llm.schema<number & tags.Type<"uint8">>({})),
    {
      type: "integer",
      minimum: 0,
    },
  );
  equalsSchema(
    "uint16",
    clean(typia.llm.schema<number & tags.Type<"uint16">>({})),
    {
      type: "integer",
      minimum: 0,
    },
  );
  equalsSchema(
    "float",
    clean(typia.llm.schema<number & tags.Type<"float">>({})),
    {
      type: "number",
    },
  );
  equalsSchema(
    "inclusive range",
    clean(typia.llm.schema<number & tags.Minimum<1> & tags.Maximum<10>>({})),
    {
      type: "number",
      minimum: 1,
      maximum: 10,
    },
  );
  equalsSchema(
    "exclusive range",
    clean(
      typia.llm.schema<
        number & tags.ExclusiveMinimum<1> & tags.ExclusiveMaximum<10>
      >({}),
    ),
    {
      type: "number",
      exclusiveMinimum: 1,
      exclusiveMaximum: 10,
    },
  );
  equalsSchema(
    "multipleOf",
    clean(typia.llm.schema<number & tags.MultipleOf<5>>({})),
    {
      type: "number",
      multipleOf: 5,
    },
  );
  equalsSchema(
    "number default",
    clean(typia.llm.schema<number & tags.Default<3>>({})),
    {
      type: "number",
      default: 3,
    },
  );
  equalsSchema(
    "strict uint8 shifts minimum",
    clean(typia.llm.schema<number & tags.Type<"uint8">, { strict: true }>({})),
    {
      type: "integer",
      description: "@minimum 0",
    },
  );
  const commentTypeDefs: Record<string, ILlmSchema> = {};
  equalsSchema(
    "comment type smaller integers",
    clean(
      resolve(
        typia.llm.schema<ICommentTypeNumbers>(commentTypeDefs),
        commentTypeDefs,
      ),
    ),
    {
      type: "object",
      properties: {
        int8: {
          type: "integer",
        },
        int16: {
          type: "integer",
        },
        uint8: {
          type: "integer",
          minimum: 0,
        },
        uint16: {
          type: "integer",
          minimum: 0,
        },
      },
      required: ["int8", "uint8", "int16", "uint16"],
      additionalProperties: false,
    },
  );
  const strictCommentTypeDefs: Record<string, ILlmSchema> = {};
  equalsSchema(
    "strict comment type smaller integers",
    clean(
      resolve(
        typia.llm.schema<ICommentTypeNumbers, { strict: true }>(
          strictCommentTypeDefs,
        ),
        strictCommentTypeDefs,
      ),
    ),
    {
      type: "object",
      properties: {
        int8: {
          type: "integer",
        },
        int16: {
          type: "integer",
        },
        uint8: {
          type: "integer",
          description: "@minimum 0",
        },
        uint16: {
          type: "integer",
          description: "@minimum 0",
        },
      },
      required: ["int8", "uint8", "int16", "uint16"],
      additionalProperties: false,
    },
  );
  equalsSchema(
    "number literal union",
    enumSchema(typia.llm.schema<1 | 2 | 3>({})),
    {
      type: "number",
      enum: [1, 2, 3],
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const equalsSchema = (
  title: string,
  actual: unknown,
  expected: unknown,
): void => {
  TestEquality.equals(`${title}.actual`, actual, expected);
  TestEquality.equals(`${title}.expected`, expected, actual);
};

const enumSchema = (
  schema: ILlmSchema,
): { type: string | undefined; enum: unknown[] } => ({
  type: (schema as { type?: string }).type,
  enum: [...((schema as { enum?: unknown[] }).enum ?? [])].sort(),
});

const resolve = (
  schema: ILlmSchema,
  $defs: Record<string, ILlmSchema>,
): ILlmSchema => {
  if ("$ref" in schema) return $defs[schema.$ref.split("/").at(-1)!]!;
  return schema;
};
