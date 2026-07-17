import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaCollection, ILlmSchema, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies the native strict LLM schema agrees with `@typia/utils`' converter.
 *
 * Under `strict`, constraint keywords are shifted out of the schema and into the
 * description as `@tag value` lines. Two owners implement that shift — the Go
 * emitter `typia.llm.*` calls, and `OpenApiConstraintShifter` in `@typia/utils`
 * — and they once disagreed on `default`, which the numeric path deleted instead
 * of shifting. The oracle below was already correct when that shipped; only the
 * fixture was blind, because it omitted the single tag they disagreed on.
 *
 * The fixture therefore exercises every tag both shift functions handle rather
 * than a sample: a correct comparison over an incomplete input proves nothing
 * about the missing case.
 *
 * 1. Declare properties covering the full numeric, string, and array tag sets.
 * 2. Convert the same type through `@typia/utils` under `strict`.
 * 3. Assert the native schema and `$defs` equal the converter's output.
 */
export const test_llm_schema_parity_converter_strict = (): void => {
  interface IStrictChild {
    // The complete string shift set: minLength, maxLength, format, pattern,
    // contentMediaType, default.
    code: string & tags.MinLength<2> & tags.MaxLength<8> & tags.Pattern<"^[a-z]+$">;
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

  TestValidator.equals("strict schema", clean(actual), clean(converted.value));
  TestValidator.equals("strict $defs", clean(actualDefs), clean(expectedDefs));
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
