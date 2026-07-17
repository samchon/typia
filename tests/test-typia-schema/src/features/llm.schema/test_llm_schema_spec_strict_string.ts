import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

export const test_llm_schema_spec_strict_string = (): void => {
  // Format and Pattern are mutually exclusive tags, so the format-bearing and
  // pattern-bearing constraint sets are shifted on two separate strings; both
  // still verify that strict mode moves every string keyword into the
  // description.
  TestValidator.equals(
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
  TestValidator.equals(
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
