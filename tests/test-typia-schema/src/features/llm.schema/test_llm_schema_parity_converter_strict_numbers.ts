import { IJsonSchemaCollection, ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies strict LLM constraint text spells numbers as JavaScript does.
 *
 * Under `strict`, constraints move into the description as `@tag value` lines.
 * `@typia/utils` writes the value with JavaScript's `String()`, while the Go
 * emitter used `fmt.Sprint`. A type tag's value is the compiler's own number,
 * which already prints the JavaScript way, but a comment tag's value is a Go
 * float, printed `1e+06` for 1000000 and `1e-07` for 0.0000001 (#2452). The
 * converter's output is the oracle.
 *
 * 1. Declare type-tag and comment-tag constraints at the positional-notation
 *    boundaries, and an infinite one.
 * 2. Convert the same type through `@typia/utils` under `strict`.
 * 3. Assert the native descriptions equal the converter's, and pin the text.
 */
export const test_llm_schema_parity_converter_strict_numbers = (): void => {
  const collection: IJsonSchemaCollection = typia.json.schemas<[IRoot]>();
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
  typia.llm.schema<IRoot, { strict: true }>(actualDefs);

  const descriptions = (defs: Record<string, ILlmSchema>) =>
    Object.fromEntries(
      Object.entries((defs.IRoot as ILlmSchema.IObject).properties).map(
        ([key, value]) => [key, value.description],
      ),
    );
  TestEquality.equals(
    "strict descriptions",
    descriptions(actualDefs),
    descriptions(expectedDefs),
  );
  TestEquality.equals("pinned", descriptions(actualDefs), {
    million: "@maximum 1000000",
    large: "@minimum 1e+21",
    tiny: "@multipleOf 1e-7",
    infinite: "@maximum Infinity",
    commentMillion: "@maximum 1000000",
    commentTiny: "@multipleOf 1e-7",
    commentItems: "@minItems 2\n@maxItems 5",
  });
};

interface IRoot {
  million: number & tags.Maximum<1000000>;
  large: number & tags.Minimum<1e21>;
  tiny: number & tags.MultipleOf<0.0000001>;
  infinite: number & tags.Maximum<1e400>;

  /** @maximum 1000000 */
  commentMillion: number;

  /** @multipleOf 0.0000001 */
  commentTiny: number;

  /**
   * @minItems 2
   * @maxItems 5
   */
  commentItems: string[];
}
