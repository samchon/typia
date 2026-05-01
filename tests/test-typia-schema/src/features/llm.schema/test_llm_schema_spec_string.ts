import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

export const test_llm_schema_spec_string = (): void => {
  TestValidator.equals("string", clean(typia.llm.schema<string>({})), {
    type: "string",
  });
  TestValidator.equals(
    "format",
    clean(typia.llm.schema<string & tags.Format<"email">>({})),
    {
      type: "string",
      format: "email",
    },
  );
  TestValidator.equals(
    "pattern",
    clean(typia.llm.schema<string & tags.Pattern<"^[a-z]+$">>({})),
    {
      type: "string",
      pattern: "^[a-z]+$",
    },
  );
  TestValidator.equals(
    "length",
    clean(typia.llm.schema<string & tags.MinLength<2> & tags.MaxLength<8>>({})),
    {
      type: "string",
      minLength: 2,
      maxLength: 8,
    },
  );
  TestValidator.equals(
    "content media type",
    clean(typia.llm.schema<string & tags.ContentMediaType<"image/png">>({})),
    {
      type: "string",
      contentMediaType: "image/png",
    },
  );
  TestValidator.equals(
    "default",
    clean(typia.llm.schema<string & tags.Default<"guest">>({})),
    {
      type: "string",
      default: "guest",
    },
  );
  TestValidator.equals(
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
