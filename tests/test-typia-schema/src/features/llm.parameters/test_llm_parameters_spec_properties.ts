import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

export const test_llm_parameters_spec_properties = (): void => {
  interface IChild {
    id: string & tags.Format<"uuid">;
  }
  interface IParameters {
    required: string;
    optional?: number;
    nullable: boolean | null;
    literal: "a" | "b";
    child: IChild;
    records: Record<string, number & tags.Minimum<0>>;
    children: IChild[];
  }

  const params = typia.llm.parameters<IParameters>();
  TestValidator.equals(
    "parameters object shell",
    {
      type: params.type,
      additionalProperties: params.additionalProperties,
      required: params.required,
    },
    {
      type: "object",
      additionalProperties: false,
      required: [
        "required",
        "nullable",
        "literal",
        "child",
        "records",
        "children",
      ],
    },
  );
  TestValidator.equals("required property", clean(params.properties.required), {
    type: "string",
  });
  TestValidator.equals("optional property", clean(params.properties.optional), {
    type: "number",
  });
  TestValidator.equals("nullable property", clean(params.properties.nullable), {
    anyOf: [
      {
        type: "null",
      },
      {
        type: "boolean",
      },
    ],
  });
  TestValidator.equals(
    "literal property",
    enumSchema(params.properties.literal),
    {
      type: "string",
      enum: ["a", "b"],
    },
  );
  TestValidator.equals("child reference", clean(params.properties.child), {
    $ref: "#/$defs/IChild",
  });
  TestValidator.equals("child definition", clean(params.$defs.IChild), {
    type: "object",
    properties: {
      id: {
        type: "string",
        format: "uuid",
      },
    },
    required: ["id"],
    additionalProperties: false,
  });

  const records = resolve(params.properties.records, params.$defs);
  TestValidator.equals("record property", clean(records), {
    type: "object",
    properties: {},
    additionalProperties: {
      type: "number",
      minimum: 0,
    },
    required: [],
  });
  TestValidator.equals("children array", clean(params.properties.children), {
    type: "array",
    items: {
      $ref: "#/$defs/IChild",
    },
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const enumSchema = (
  schema: ILlmSchema | undefined,
): { type: string | undefined; enum: unknown[] } => ({
  type: (schema as { type?: string } | undefined)?.type,
  enum: [...((schema as { enum?: unknown[] } | undefined)?.enum ?? [])].sort(),
});

const resolve = (
  schema: ILlmSchema | undefined,
  $defs: Record<string, ILlmSchema>,
): ILlmSchema | undefined => {
  if (!schema || !("$ref" in schema)) return schema;
  const key = schema.$ref.split("/").at(-1);
  return key === undefined ? undefined : $defs[key];
};
