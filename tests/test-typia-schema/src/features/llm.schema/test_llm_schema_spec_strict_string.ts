import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies llm schema spec strict string against the native typia.llm.schema
 * output.
 *
 * The case builds its input in this file and asserts strict string shifts
 * format constraints, strict string shifts pattern constraint.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (strict string shifts format constraints; strict string shifts pattern constraint).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (strict string shifts format constraints; strict string shifts pattern constraint) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_spec_strict_string is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
