import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies strict native objects keep closed/required shells, move
 * string/numeric/array constraints into descriptions, move reference-property
 * documentation to the owner and retain nested strict objects.
 *
 * Removed keywords and retained description tags are both asserted across
 * string, integer and array/item kinds. Reference description relocation, owner
 * prose and nested required fields preserve additional branches.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Strict native objects keep closed/required shells, move string/numeric/array constraints into descriptions, move reference-property documentation to the owner and retain nested strict objects.
 * @evidence contracts/testing.md#independent-expectations Handwritten required names, undefined keyword projections and authored @tag fragments independently follow the strict LLM representation and source tags/JSDoc, rather than another converter result.
 * @evidence contracts/testing.md#distinguishing-cases Removed keywords and retained description tags are both asserted across string, integer and array/item kinds. Reference description relocation, owner prose and nested required fields preserve additional branches.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_strict_converter_matrix is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Removed keywords and retained description tags are both asserted across string, integer and array/item kinds. Reference description relocation, owner prose and nested required fields preserve additional branches. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_strict_converter_matrix = (): void => {
  interface IStrictDetail {
    label: string & tags.MinLength<1>;
    count: number & tags.Minimum<0>;
  }
  interface IStrictMember {
    id: string & tags.Format<"uuid"> & tags.MinLength<36> & tags.MaxLength<36>;
    age: number &
      tags.Type<"uint32"> &
      tags.Minimum<1> &
      tags.ExclusiveMaximum<120> &
      tags.MultipleOf<1>;
    aliases: (string & tags.MinLength<1>)[] &
      tags.MinItems<1> &
      tags.MaxItems<3> &
      tags.UniqueItems;
    /**
     * Nested strict detail.
     *
     * This property description must move to the owner description in strict
     * mode because OpenAI structured output does not accept $ref descriptions.
     */
    detail: IStrictDetail;
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IStrictMember, { strict: true }>($defs);

  TestEquality.equals("top level reference", schema, {
    $ref: "#/$defs/IStrictMember",
  });
  TestValidator.predicate("IStrictMember definition exists", () =>
    isObject($defs.IStrictMember),
  );
  TestValidator.predicate("IStrictDetail definition exists", () =>
    isObject($defs.IStrictDetail),
  );

  const member = $defs.IStrictMember as ILlmSchema.IObject;
  TestEquality.equals(
    "strict object additionalProperties",
    member.additionalProperties,
    false,
  );
  TestEquality.equals("strict object required", sorted(member.required), [
    "age",
    "aliases",
    "detail",
    "id",
  ]);
  TestValidator.predicate(
    "owner description includes ref property docs",
    () =>
      !!member.description?.includes(
        "Description of {@link detail} property",
      ) &&
      member.description.includes("> Nested strict detail.") &&
      member.description.includes(
        "> This property description must move to the owner description",
      ),
  );

  const id = member.properties.id;
  TestValidator.predicate("id string", () => isString(id));
  if (isString(id)) {
    TestEquality.equals(
      "id constraints removed from schema",
      {
        format: id.format,
        minLength: id.minLength,
        maxLength: id.maxLength,
      },
      {
        format: undefined,
        minLength: undefined,
        maxLength: undefined,
      },
    );
    TestValidator.predicate("id constraints shifted to description", () =>
      includesAll(id.description, [
        "@format uuid",
        "@minLength 36",
        "@maxLength 36",
      ]),
    );
  }

  const age = member.properties.age;
  TestValidator.predicate("age integer", () => isInteger(age));
  if (isInteger(age)) {
    TestEquality.equals(
      "age constraints removed from schema",
      {
        minimum: age.minimum,
        exclusiveMaximum: age.exclusiveMaximum,
        multipleOf: age.multipleOf,
      },
      {
        minimum: undefined,
        exclusiveMaximum: undefined,
        multipleOf: undefined,
      },
    );
    TestValidator.predicate("age constraints shifted to description", () =>
      includesAll(age.description, [
        "@minimum 1",
        "@exclusiveMaximum 120",
        "@multipleOf 1",
      ]),
    );
  }

  const aliases = member.properties.aliases;
  TestValidator.predicate("aliases array", () => isArray(aliases));
  if (isArray(aliases)) {
    TestEquality.equals(
      "array constraints removed from schema",
      {
        minItems: aliases.minItems,
        maxItems: aliases.maxItems,
        uniqueItems: aliases.uniqueItems,
      },
      {
        minItems: undefined,
        maxItems: undefined,
        uniqueItems: undefined,
      },
    );
    TestValidator.predicate("array constraints shifted to description", () =>
      includesAll(aliases.description, [
        "@minItems 1",
        "@maxItems 3",
        "@uniqueItems",
      ]),
    );
    TestValidator.predicate("array item string", () => isString(aliases.items));
    if (isString(aliases.items))
      TestValidator.predicate("item constraints shifted to description", () =>
        includesAll(aliases.items.description, ["@minLength 1"]),
      );
  }

  TestEquality.equals(
    "strict ref description removed",
    member.properties.detail,
    {
      $ref: "#/$defs/IStrictDetail",
    },
  );

  const detail = $defs.IStrictDetail as ILlmSchema.IObject;
  TestEquality.equals(
    "nested strict additionalProperties",
    detail.additionalProperties,
    false,
  );
  TestEquality.equals("nested strict required", sorted(detail.required), [
    "count",
    "label",
  ]);
};

const sorted = (values: string[] | undefined): string[] =>
  [...(values ?? [])].sort();

const includesAll = (
  description: string | undefined,
  values: string[],
): boolean =>
  !!description && values.every((value) => description.includes(value));

const isArray = (schema: ILlmSchema | undefined): schema is ILlmSchema.IArray =>
  !!schema && (schema as { type?: string }).type === "array";

const isInteger = (
  schema: ILlmSchema | undefined,
): schema is ILlmSchema.IInteger =>
  !!schema && (schema as { type?: string }).type === "integer";

const isObject = (
  schema: ILlmSchema | undefined,
): schema is ILlmSchema.IObject =>
  !!schema && (schema as { type?: string }).type === "object";

const isString = (
  schema: ILlmSchema | undefined,
): schema is ILlmSchema.IString =>
  !!schema && (schema as { type?: string }).type === "string";
