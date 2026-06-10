import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

export const test_llm_schema_spec_number = (): void => {
  interface ICommentTypeNumbers {
    /** @type int8 */
    int8: number;

    /** @type uint8 */
    uint8: number;

    /** @type int16 */
    int16: number;

    /** @type uint16 */
    uint16: number;
  }

  equalsSchema("number", clean(typia.llm.schema<number>({})), {
    type: "number",
  });
  equalsSchema(
    "int32",
    clean(typia.llm.schema<number & tags.Type<"int32">>({})),
    {
      type: "integer",
    },
  );
  equalsSchema(
    "int8",
    clean(typia.llm.schema<number & tags.Type<"int8">>({})),
    {
      type: "integer",
    },
  );
  equalsSchema(
    "int16",
    clean(typia.llm.schema<number & tags.Type<"int16">>({})),
    {
      type: "integer",
    },
  );
  equalsSchema(
    "uint32",
    clean(typia.llm.schema<number & tags.Type<"uint32">>({})),
    {
      type: "integer",
      minimum: 0,
    },
  );
  equalsSchema(
    "uint8",
    clean(typia.llm.schema<number & tags.Type<"uint8">>({})),
    {
      type: "integer",
      minimum: 0,
    },
  );
  equalsSchema(
    "uint16",
    clean(typia.llm.schema<number & tags.Type<"uint16">>({})),
    {
      type: "integer",
      minimum: 0,
    },
  );
  equalsSchema(
    "float",
    clean(typia.llm.schema<number & tags.Type<"float">>({})),
    {
      type: "number",
    },
  );
  equalsSchema(
    "inclusive range",
    clean(typia.llm.schema<number & tags.Minimum<1> & tags.Maximum<10>>({})),
    {
      type: "number",
      minimum: 1,
      maximum: 10,
    },
  );
  equalsSchema(
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
  equalsSchema(
    "multipleOf",
    clean(typia.llm.schema<number & tags.MultipleOf<5>>({})),
    {
      type: "number",
      multipleOf: 5,
    },
  );
  equalsSchema(
    "number default",
    clean(typia.llm.schema<number & tags.Default<3>>({})),
    {
      type: "number",
      default: 3,
    },
  );
  equalsSchema(
    "strict uint8 shifts minimum",
    clean(typia.llm.schema<number & tags.Type<"uint8">, { strict: true }>({})),
    {
      type: "integer",
      description: "@minimum 0",
    },
  );
  const commentTypeDefs: Record<string, ILlmSchema> = {};
  equalsSchema(
    "comment type smaller integers",
    clean(
      resolve(
        typia.llm.schema<ICommentTypeNumbers>(commentTypeDefs),
        commentTypeDefs,
      ),
    ),
    {
      type: "object",
      properties: {
        int8: {
          type: "integer",
        },
        int16: {
          type: "integer",
        },
        uint8: {
          type: "integer",
          minimum: 0,
        },
        uint16: {
          type: "integer",
          minimum: 0,
        },
      },
      required: ["int8", "uint8", "int16", "uint16"],
      additionalProperties: false,
    },
  );
  const strictCommentTypeDefs: Record<string, ILlmSchema> = {};
  equalsSchema(
    "strict comment type smaller integers",
    clean(
      resolve(
        typia.llm.schema<ICommentTypeNumbers, { strict: true }>(
          strictCommentTypeDefs,
        ),
        strictCommentTypeDefs,
      ),
    ),
    {
      type: "object",
      properties: {
        int8: {
          type: "integer",
        },
        int16: {
          type: "integer",
        },
        uint8: {
          type: "integer",
          description: "@minimum 0",
        },
        uint16: {
          type: "integer",
          description: "@minimum 0",
        },
      },
      required: ["int8", "uint8", "int16", "uint16"],
      additionalProperties: false,
    },
  );
  equalsSchema(
    "number literal union",
    enumSchema(typia.llm.schema<1 | 2 | 3>({})),
    {
      type: "number",
      enum: [1, 2, 3],
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const equalsSchema = (
  title: string,
  actual: unknown,
  expected: unknown,
): void => {
  TestValidator.equals(`${title}.actual`, actual, expected);
  TestValidator.equals(`${title}.expected`, expected, actual);
};

const enumSchema = (
  schema: ILlmSchema,
): { type: string | undefined; enum: unknown[] } => ({
  type: (schema as { type?: string }).type,
  enum: [...((schema as { enum?: unknown[] }).enum ?? [])].sort(),
});

const resolve = (
  schema: ILlmSchema,
  $defs: Record<string, ILlmSchema>,
): ILlmSchema => {
  if ("$ref" in schema) return $defs[schema.$ref.split("/").at(-1)!]!;
  return schema;
};
