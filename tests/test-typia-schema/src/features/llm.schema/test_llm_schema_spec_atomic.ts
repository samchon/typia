import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

export const test_llm_schema_spec_boolean = (): void => {
  TestValidator.equals("boolean", clean(typia.llm.schema<boolean>({})), {
    type: "boolean",
  });
  TestValidator.equals("true literal", clean(typia.llm.schema<true>({})), {
    type: "boolean",
    enum: [true],
  });
  TestValidator.equals("false literal", clean(typia.llm.schema<false>({})), {
    type: "boolean",
    enum: [false],
  });
  TestValidator.equals(
    "boolean literal union collapses to boolean",
    clean(typia.llm.schema<true | false>({})),
    {
      type: "boolean",
    },
  );
};

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

export const test_llm_schema_spec_number = (): void => {
  TestValidator.equals("number", clean(typia.llm.schema<number>({})), {
    type: "number",
  });
  TestValidator.equals(
    "int32",
    clean(typia.llm.schema<number & tags.Type<"int32">>({})),
    {
      type: "integer",
    },
  );
  TestValidator.equals(
    "uint32",
    clean(typia.llm.schema<number & tags.Type<"uint32">>({})),
    {
      type: "integer",
      minimum: 0,
    },
  );
  TestValidator.equals(
    "float",
    clean(typia.llm.schema<number & tags.Type<"float">>({})),
    {
      type: "number",
    },
  );
  TestValidator.equals(
    "inclusive range",
    clean(typia.llm.schema<number & tags.Minimum<1> & tags.Maximum<10>>({})),
    {
      type: "number",
      minimum: 1,
      maximum: 10,
    },
  );
  TestValidator.equals(
    "exclusive range",
    clean(
      typia.llm.schema<
        number & tags.ExclusiveMinimum<1> & tags.ExclusiveMaximum<10>
      >({}),
    ),
    {
      type: "number",
      exclusiveMinimum: 1,
      exclusiveMaximum: 10,
    },
  );
  TestValidator.equals(
    "multipleOf",
    clean(typia.llm.schema<number & tags.MultipleOf<5>>({})),
    {
      type: "number",
      multipleOf: 5,
    },
  );
  TestValidator.equals(
    "number default",
    clean(typia.llm.schema<number & tags.Default<3>>({})),
    {
      type: "number",
      default: 3,
    },
  );
  TestValidator.equals(
    "number literal union",
    enumSchema(typia.llm.schema<1 | 2 | 3>({})),
    {
      type: "number",
      enum: [1, 2, 3],
    },
  );
};

export const test_llm_schema_spec_unknown = (): void => {
  TestValidator.equals("any", clean(typia.llm.schema<any>({})), {});
  TestValidator.equals("unknown", clean(typia.llm.schema<unknown>({})), {});
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const enumSchema = (
  schema: ILlmSchema,
): { type: string | undefined; enum: unknown[] } => ({
  type: (schema as { type?: string }).type,
  enum: [...((schema as { enum?: unknown[] }).enum ?? [])].sort(),
});
