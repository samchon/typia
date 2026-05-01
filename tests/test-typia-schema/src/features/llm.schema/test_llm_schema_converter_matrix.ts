import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

export const test_llm_schema_converter_matrix = (): void => {
  interface ILeaf {
    code: string & tags.Pattern<"^[A-Z]{2}$">;
    amount?: number & tags.Minimum<0>;
  }
  interface IMatrix {
    id: string & tags.Format<"uuid">;
    name: string &
      tags.MinLength<2> &
      tags.MaxLength<32> &
      tags.Pattern<"^[A-Za-z ]+$">;
    payload: string &
      tags.ContentMediaType<"application/json"> &
      tags.Default<'{"ok":true}'>;
    age: number &
      tags.Type<"uint32"> &
      tags.Minimum<1> &
      tags.ExclusiveMaximum<150> &
      tags.MultipleOf<1> &
      tags.Default<30>;
    ratio: number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<1>;
    flag: true;
    mode: "create" | "update" | "delete";
    level: 1 | 2 | 3;
    nullable: string | null;
    leaf: ILeaf;
    leaves: ILeaf[] & tags.MinItems<1> & tags.MaxItems<5> & tags.UniqueItems;
    dictionary: Record<string, number & tags.Minimum<0>>;
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IMatrix>($defs);

  TestValidator.equals("top level reference", schema, {
    $ref: "#/$defs/IMatrix",
  });
  TestValidator.predicate("IMatrix definition exists", () =>
    isObject($defs.IMatrix),
  );
  TestValidator.predicate("ILeaf definition exists", () =>
    isObject($defs.ILeaf),
  );

  const matrix = $defs.IMatrix as ILlmSchema.IObject;
  TestValidator.equals("matrix type", matrix.type, "object");
  TestValidator.equals("matrix required", sorted(matrix.required), [
    "age",
    "dictionary",
    "flag",
    "id",
    "leaf",
    "leaves",
    "level",
    "mode",
    "name",
    "nullable",
    "payload",
    "ratio",
  ]);

  TestValidator.equals("id format", matrix.properties.id, {
    type: "string",
    format: "uuid",
  });
  TestValidator.equals("name constraints", matrix.properties.name, {
    type: "string",
    pattern: "^[A-Za-z ]+$",
    minLength: 2,
    maxLength: 32,
  });
  TestValidator.equals("payload content metadata", matrix.properties.payload, {
    type: "string",
    contentMediaType: "application/json",
    default: '{"ok":true}',
  });
  TestValidator.equals("age numeric constraints", matrix.properties.age, {
    type: "integer",
    minimum: 1,
    exclusiveMaximum: 150,
    multipleOf: 1,
    default: 30,
  });
  TestValidator.equals("ratio numeric constraints", matrix.properties.ratio, {
    type: "number",
    exclusiveMinimum: 0,
    exclusiveMaximum: 1,
  });
  TestValidator.equals(
    "boolean const becomes enum",
    enumSchema(matrix.properties.flag),
    {
      type: "boolean",
      enum: [true],
    },
  );
  TestValidator.equals(
    "string literal union becomes enum",
    enumSchema(matrix.properties.mode),
    {
      type: "string",
      enum: ["create", "delete", "update"],
    },
  );
  TestValidator.equals(
    "numeric literal union becomes enum",
    enumSchema(matrix.properties.level),
    {
      type: "number",
      enum: [1, 2, 3],
    },
  );

  const nullable = matrix.properties.nullable;
  TestValidator.predicate("nullable becomes anyOf", () => isAnyOf(nullable));
  if (isAnyOf(nullable))
    TestValidator.equals(
      "nullable variants",
      sorted(nullable.anyOf.map((s) => typeName(s))),
      ["null", "string"],
    );

  TestValidator.equals("leaf reference", matrix.properties.leaf, {
    $ref: "#/$defs/ILeaf",
  });

  const leaves = matrix.properties.leaves;
  TestValidator.predicate("leaves array", () => isArray(leaves));
  if (isArray(leaves)) {
    TestValidator.equals(
      "leaves bounds",
      {
        minItems: leaves.minItems,
        maxItems: leaves.maxItems,
        uniqueItems: leaves.uniqueItems,
      },
      {
        minItems: 1,
        maxItems: 5,
        uniqueItems: true,
      },
    );
    TestValidator.equals("leaves item reference", leaves.items, {
      $ref: "#/$defs/ILeaf",
    });
  }

  const dictionary = resolve(matrix.properties.dictionary, $defs);
  TestValidator.predicate("dictionary object", () => isObject(dictionary));
  if (isObject(dictionary))
    TestValidator.equals(
      "dictionary additionalProperties schema",
      {
        type: dictionary.type,
        additionalProperties: dictionary.additionalProperties,
        required: dictionary.required,
      },
      {
        type: "object",
        additionalProperties: {
          type: "number",
          minimum: 0,
        },
        required: [],
      },
    );

  const leaf = $defs.ILeaf as ILlmSchema.IObject;
  TestValidator.equals("leaf required", leaf.required, ["code"]);
  TestValidator.equals("leaf code pattern", leaf.properties.code, {
    type: "string",
    pattern: "^[A-Z]{2}$",
  });
  TestValidator.equals(
    "leaf optional property retained",
    leaf.properties.amount,
    {
      type: "number",
      minimum: 0,
    },
  );
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
