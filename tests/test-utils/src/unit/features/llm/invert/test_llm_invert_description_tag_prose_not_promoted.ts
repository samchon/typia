import { ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
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
 * The whole inverted leaf is compared, unlike the sibling cases that assert a
 * keyword is present: the comparison is symmetric (#2401), so an invented
 * keyword — present and defined on one side only — fails it.
 *
 * 1. Hand-build a non-strict leaf whose prose happens to contain tag-like text.
 * 2. Invert it without `config.strict`.
 * 3. Assert no constraint keyword is invented.
 * 4. Assert the description survives verbatim.
 *
 * @evidence contracts/testing.md#behavioral-verification LlmSchemaConverter.invert runs on a non-strict string leaf whose description contains tag-like text; the compared constraint keywords and the verbatim description fail if prose is promoted to a keyword or edited.
 * @evidence contracts/testing.md#independent-expectations The input is hand-built and the expected leaf is the all-undefined keyword set plus the unchanged description; the strict-mode tag shifting rule that makes @minimum a constraint is the documented contract, not the inversion output. The strict counterpart is owned by sibling conversion cases.
 * @evidence contracts/testing.md#distinguishing-cases A non-strict leaf with @minimum and @maxLength prose is the negative case where nothing may be promoted; the strict positive case lives in other inversion cases. Only a string leaf is exercised.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. LlmSchemaConverter.invert runs in process on an authored schema with no native build, installation or host.
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

  TestEquality.equals(
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
  TestEquality.equals(
    "prose preserved verbatim",
    inverted.description,
    description,
  );
};
