import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

export const test_llm_schema_spec_string = (): void => {
  TestEquality.equals("string", clean(typia.llm.schema<string>({})), {
    type: "string",
  });
  TestEquality.equals(
    "format",
    clean(typia.llm.schema<string & tags.Format<"email">>({})),
    {
      type: "string",
      format: "email",
    },
  );
  TestEquality.equals(
    "pattern",
    clean(typia.llm.schema<string & tags.Pattern<"^[a-z]+$">>({})),
    {
      type: "string",
      pattern: "^[a-z]+$",
    },
  );
  TestEquality.equals(
    "length",
    clean(typia.llm.schema<string & tags.MinLength<2> & tags.MaxLength<8>>({})),
    {
      type: "string",
      minLength: 2,
      maxLength: 8,
    },
  );
  TestEquality.equals(
    "content media type",
    clean(typia.llm.schema<string & tags.ContentMediaType<"image/png">>({})),
    {
      type: "string",
      contentMediaType: "image/png",
    },
  );
  TestEquality.equals(
    "default",
    clean(typia.llm.schema<string & tags.Default<"guest">>({})),
    {
      type: "string",
      default: "guest",
    },
  );
  TestEquality.equals(
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
