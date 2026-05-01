import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

export const test_llm_schema_spec_strict_string = (): void => {
  TestValidator.equals(
    "strict string shifts constraints",
    clean(
      typia.llm.schema<
        string &
          tags.Format<"uuid"> &
          tags.MinLength<36> &
          tags.MaxLength<36> &
          tags.Pattern<"^[0-9a-f-]+$"> &
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
        "@pattern ^[0-9a-f-]+$",
        "@contentMediaType text/plain",
        "@default 00000000-0000-0000-0000-000000000000",
      ].join("\n"),
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
