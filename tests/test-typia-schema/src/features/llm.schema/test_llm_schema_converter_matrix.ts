import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies native IMatrix schema/definitions retain scalar tags, literals,
 * nullable variants, nested optional leaf, constrained repeated leaf and
 * numeric dictionary value structure.
 *
 * String metadata/default, inclusive/exclusive number constraints,
 * boolean/string/number literal kinds, nullable union, repeated references,
 * array bounds/uniqueness and optional leaf amount all keep distinct
 * assertions. Local sorting is used for required/enum membership comparisons
 * only.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native IMatrix schema/definitions retain scalar tags, literals, nullable variants, nested optional leaf, constrained repeated leaf and numeric dictionary value structure.
 * @evidence contracts/testing.md#independent-expectations Handwritten references, required names, scalar keywords, enums and tag values follow IMatrix/ILeaf declarations. No converter output or emitted snapshot supplies these expected schema fragments.
 * @evidence contracts/testing.md#distinguishing-cases String metadata/default, inclusive/exclusive number constraints, boolean/string/number literal kinds, nullable union, repeated references, array bounds/uniqueness and optional leaf amount all keep distinct assertions. Local sorting is used for required/enum membership comparisons only.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_converter_matrix is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. String metadata/default, inclusive/exclusive number constraints, boolean/string/number literal kinds, nullable union, repeated references, array bounds/uniqueness and optional leaf amount all keep distinct assertions. Local sorting is used for required/enum membership comparisons only. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
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

  TestEquality.equals("top level reference", schema, {
    $ref: "#/$defs/IMatrix",
  });
  TestValidator.predicate("IMatrix definition exists", () =>
    isObject($defs.IMatrix),
  );
  TestValidator.predicate("ILeaf definition exists", () =>
    isObject($defs.ILeaf),
  );

  const matrix = $defs.IMatrix as ILlmSchema.IObject;
  TestEquality.equals("matrix type", matrix.type, "object");
  TestEquality.equals("matrix required", sorted(matrix.required), [
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

  TestEquality.equals("id format", matrix.properties.id, {
    type: "string",
    format: "uuid",
  });
  TestEquality.equals("name constraints", matrix.properties.name, {
    type: "string",
    pattern: "^[A-Za-z ]+$",
    minLength: 2,
    maxLength: 32,
  });
  TestEquality.equals("payload content metadata", matrix.properties.payload, {
    type: "string",
    contentMediaType: "application/json",
    default: '{"ok":true}',
  });
  TestEquality.equals("age numeric constraints", matrix.properties.age, {
    type: "integer",
    minimum: 1,
    exclusiveMaximum: 150,
    multipleOf: 1,
    default: 30,
  });
  TestEquality.equals("ratio numeric constraints", matrix.properties.ratio, {
    type: "number",
    exclusiveMinimum: 0,
    exclusiveMaximum: 1,
  });
  TestEquality.equals(
    "boolean const becomes enum",
    enumSchema(matrix.properties.flag),
    {
      type: "boolean",
      enum: [true],
    },
  );
  TestEquality.equals(
    "string literal union becomes enum",
    enumSchema(matrix.properties.mode),
    {
      type: "string",
      enum: ["create", "delete", "update"],
    },
  );
  TestEquality.equals(
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
    TestEquality.equals(
      "nullable variants",
      sorted(nullable.anyOf.map((s) => typeName(s))),
      ["null", "string"],
    );

  TestEquality.equals("leaf reference", matrix.properties.leaf, {
    $ref: "#/$defs/ILeaf",
  });

  const leaves = matrix.properties.leaves;
  TestValidator.predicate("leaves array", () => isArray(leaves));
  if (isArray(leaves)) {
    TestEquality.equals(
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
    TestEquality.equals("leaves item reference", leaves.items, {
      $ref: "#/$defs/ILeaf",
    });
  }

  const dictionary = resolve(matrix.properties.dictionary, $defs);
  TestValidator.predicate("dictionary object", () => isObject(dictionary));
  if (isObject(dictionary))
    TestEquality.equals(
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
  TestEquality.equals("leaf required", leaf.required, ["code"]);
  TestEquality.equals("leaf code pattern", leaf.properties.code, {
    type: "string",
    pattern: "^[A-Z]{2}$",
  });
  TestEquality.equals(
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
