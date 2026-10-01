import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies llm parameters spec properties against the native
 * typia.llm.parameters output.
 *
 * The case builds its input in this file and asserts parameters object shell,
 * required property, optional property, nullable property, literal property,
 * child reference.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 9 assertions (parameters object shell; required property; optional property; nullable property; literal property; child reference).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (parameters object shell; required property; optional property; nullable property; literal property; child reference) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_spec_properties is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
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
  TestEquality.equals(
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
  TestEquality.equals("required property", clean(params.properties.required), {
    type: "string",
  });
  TestEquality.equals("optional property", clean(params.properties.optional), {
    type: "number",
  });
  TestEquality.equals("nullable property", clean(params.properties.nullable), {
    anyOf: [
      {
        type: "null",
      },
      {
        type: "boolean",
      },
    ],
  });
  TestEquality.equals(
    "literal property",
    enumSchema(params.properties.literal),
    {
      type: "string",
      enum: ["a", "b"],
    },
  );
  TestEquality.equals("child reference", clean(params.properties.child), {
    $ref: "#/$defs/IChild",
  });
  TestEquality.equals("child definition", clean(params.$defs.IChild), {
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
  TestEquality.equals("record property", clean(records), {
    type: "object",
    properties: {},
    additionalProperties: {
      type: "number",
      minimum: 0,
    },
    required: [],
  });
  TestEquality.equals("children array", clean(params.properties.children), {
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
