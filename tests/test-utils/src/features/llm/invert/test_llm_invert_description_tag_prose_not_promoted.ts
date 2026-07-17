import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies non-strict inversion never reads constraints out of a description.
 *
 * `@minimum 3` in a description is a constraint only because the strict shifter
 * put it there. Without `strict`, nothing shifted, so the same text is the
 * author's prose: promoting it to a real keyword would invent a constraint the
 * type never declared, and stripping the line would silently edit the doc the
 * model reads. This is the inverse witness of the erasure defect — the read
 * must do nothing at all when the write did nothing.
 *
 * The inverted leaf is the first argument here, unlike the sibling cases that
 * assert a keyword is present: `TestValidator.equals` walks its first argument
 * and skips the keys holding `undefined`, so passing the leaf first is what
 * makes an invented keyword — present and defined — the thing it compares.
 *
 * 1. Hand-build a non-strict leaf whose prose happens to contain tag-like text.
 * 2. Invert it without `config.strict`.
 * 3. Assert no constraint keyword is invented.
 * 4. Assert the description survives verbatim.
 */
export const test_llm_invert_description_tag_prose_not_promoted = (): void => {
  const description: string = [
    "Write @minimum 3 in the doc to require three characters.",
    "@maxLength 7",
  ].join("\n");
  const inverted = LlmSchemaConverter.invert({
    components: {},
    $defs: {},
    schema: {
      type: "string",
      description,
    } satisfies ILlmSchema.IString,
  }) as OpenApi.IJsonSchema.IString;

  TestValidator.equals(
    "prose not promoted to constraints",
    {
      minLength: inverted.minLength,
      maxLength: inverted.maxLength,
      format: inverted.format,
      pattern: inverted.pattern,
      contentMediaType: inverted.contentMediaType,
    },
    {
      minLength: undefined,
      maxLength: undefined,
      format: undefined,
      pattern: undefined,
      contentMediaType: undefined,
    },
  );
  TestValidator.equals(
    "prose preserved verbatim",
    inverted.description,
    description,
  );
};
