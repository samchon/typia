import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

export const test_llm_parameters_converter_matrix = (): void => {
  interface IParamLeaf {
    code: string & tags.Pattern<"^[a-z]+$">;
    value: number & tags.Minimum<0>;
  }
  interface IParams {
    status: "pending" | "done";
    priority: 1 | 2 | 3;
    nullable: string | null;
    leaf: IParamLeaf;
    leaves: IParamLeaf[];
    dictionary: Record<string, string & tags.MinLength<1>>;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IParams>();

  TestValidator.equals("parameters type", params.type, "object");
  TestValidator.equals(
    "parameters additionalProperties",
    false,
    params.additionalProperties,
  );
  TestValidator.equals("parameters required", sorted(params.required), [
    "dictionary",
    "leaf",
    "leaves",
    "nullable",
    "priority",
    "status",
  ]);

  TestValidator.equals("status enum", enumSchema(params.properties.status), {
    type: "string",
    enum: ["done", "pending"],
  });
  TestValidator.equals(
    "priority enum",
    enumSchema(params.properties.priority),
    {
      type: "number",
      enum: [1, 2, 3],
    },
  );

  const nullable = params.properties.nullable;
  TestValidator.predicate("nullable is anyOf", () => isAnyOf(nullable));
  if (isAnyOf(nullable))
    TestValidator.equals(
      "nullable variants",
      sorted(nullable.anyOf.map((s) => typeName(s))),
      ["null", "string"],
    );

  TestValidator.equals("leaf reference", params.properties.leaf, {
    $ref: "#/$defs/IParamLeaf",
  });
  TestValidator.predicate("IParamLeaf definition exists", () =>
    isObject(params.$defs.IParamLeaf),
  );

  const leaves = params.properties.leaves;
  TestValidator.predicate("leaves array", () => isArray(leaves));
  if (isArray(leaves))
    TestValidator.equals("leaves item reference", leaves.items, {
      $ref: "#/$defs/IParamLeaf",
    });

  const dictionary = resolve(params.properties.dictionary, params.$defs);
  TestValidator.predicate("dictionary object", () => isObject(dictionary));
  if (isObject(dictionary))
    TestValidator.equals(
      "dictionary conversion",
      {
        type: dictionary.type,
        required: dictionary.required,
        additionalProperties: dictionary.additionalProperties,
      },
      {
        type: "object",
        required: [],
        additionalProperties: {
          type: "string",
          minLength: 1,
        },
      },
    );

  const leaf = params.$defs.IParamLeaf as ILlmSchema.IObject;
  TestValidator.equals("leaf required", sorted(leaf.required), [
    "code",
    "value",
  ]);
  TestValidator.equals("leaf code pattern", leaf.properties.code, {
    type: "string",
    pattern: "^[a-z]+$",
  });
  TestValidator.equals("leaf value minimum", leaf.properties.value, {
    type: "number",
    minimum: 0,
  });
};

const sorted = (values: string[] | undefined): string[] =>
  [...(values ?? [])].sort();

const enumSchema = (
  schema: ILlmSchema | undefined,
): { type: string | undefined; enum: unknown[] } => ({
  type: (schema as { type?: string } | undefined)?.type,
  enum: [...((schema as { enum?: unknown[] } | undefined)?.enum ?? [])].sort(),
});

const typeName = (schema: ILlmSchema): string =>
  "$ref" in schema ? "$ref" : ((schema as { type?: string }).type ?? "unknown");

const resolve = (
  schema: ILlmSchema | undefined,
  $defs: Record<string, ILlmSchema>,
): ILlmSchema | undefined => {
  if (!schema || !("$ref" in schema)) return schema;
  const key = schema.$ref.split("/").at(-1);
  return key === undefined ? undefined : $defs[key];
};

const isAnyOf = (schema: ILlmSchema | undefined): schema is ILlmSchema.IAnyOf =>
  !!schema && "anyOf" in schema && Array.isArray(schema.anyOf);

const isArray = (schema: ILlmSchema | undefined): schema is ILlmSchema.IArray =>
  !!schema && (schema as { type?: string }).type === "array";

const isObject = (
  schema: ILlmSchema | undefined,
): schema is ILlmSchema.IObject =>
  !!schema && (schema as { type?: string }).type === "object";
