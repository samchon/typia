import { IJsonSchemaCollection, ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies the native strict LLM schema agrees with `@typia/utils`' converter.
 *
 * Under `strict`, constraint keywords are shifted out of the schema and into
 * the description as `@tag value` lines. Two owners implement that shift — the
 * Go emitter `typia.llm.*` calls, and `OpenApiConstraintShifter` in
 * `@typia/utils` — and they once disagreed on `default`, which the numeric path
 * deleted instead of shifting. The oracle below was already correct when that
 * shipped; only the fixture was blind, because it omitted the single tag they
 * disagreed on.
 *
 * The fixture therefore exercises every tag both shift functions handle rather
 * than a sample: a correct comparison over an incomplete input proves nothing
 * about the missing case.
 *
 * 1. Declare properties covering the full numeric, string, and array tag sets.
 * 2. Convert the same type through `@typia/utils` under `strict`.
 * 3. Assert the native schema and `$defs` equal the converter's output.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schemas, typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (strict schema; strict $defs). The case documents its purpose as: Verifies the native strict LLM schema agrees with `@typia/utils`' converter.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Under `strict`, constraint keywords are shifted out of the schema and into the description as `@tag value` lines. Two owners implement that shift — the Go emitter `typia.llm.*` calls, and `OpenApiConstraintShifter` in `@typia/utils` — and they once disagreed on `default`, which the numeric path deleted instead of shifting. The oracle below was already correct when that shipped; only the fixture was blind, because it omitted the single tag they disagreed on. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (strict schema; strict $defs) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_parity_converter_strict is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_parity_converter_strict = (): void => {
  interface IStrictChild {
    // The complete string shift set: minLength, maxLength, format, pattern,
    // contentMediaType, default.
    code: string &
      tags.MinLength<2> &
      tags.MaxLength<8> &
      tags.Pattern<"^[a-z]+$">;
    media: string & tags.ContentMediaType<"text/plain"> & tags.Default<"body">;
    id: string & tags.Format<"uuid">;
    // The complete numeric shift set: minimum, maximum, exclusiveMinimum,
    // exclusiveMaximum, multipleOf, default.
    count: number & tags.Minimum<1> & tags.Maximum<9> & tags.Default<7>;
    ratio: number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<1>;
    step: number & tags.MultipleOf<5> & tags.Default<10>;
  }
  interface IStrictRoot {
    child: IStrictChild;
    // The complete array shift set: minItems, maxItems, uniqueItems.
    labels: (string & tags.MinLength<1>)[] &
      tags.MinItems<1> &
      tags.MaxItems<4> &
      tags.UniqueItems;
    mode: "alpha" | "beta";
    enabled: boolean;
    /** A description the shifted tags must be appended to, not replace. */
    described: number & tags.Minimum<2> & tags.Default<3>;
  }

  const collection: IJsonSchemaCollection = typia.json.schemas<[IStrictRoot]>();
  const expectedDefs: Record<string, ILlmSchema> = {};
  const converted = LlmSchemaConverter.schema({
    config: { strict: true },
    components: collection.components as OpenApi.IComponents,
    $defs: expectedDefs,
    schema: collection.schemas[0] as OpenApi.IJsonSchema,
  });
  if (converted.success === false)
    throw new Error(JSON.stringify(converted.error, null, 2));

  const actualDefs: Record<string, ILlmSchema> = {};
  const actual = typia.llm.schema<IStrictRoot, { strict: true }>(actualDefs);

  TestEquality.equals("strict schema", clean(actual), clean(converted.value));
  TestEquality.equals("strict $defs", clean(actualDefs), clean(expectedDefs));
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
