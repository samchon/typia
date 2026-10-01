import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies llm schema strict converter matrix against the native
 * typia.llm.schema output.
 *
 * The case builds its input in this file and asserts top level reference,
 * IStrictMember definition exists, IStrictDetail definition exists, strict
 * object additionalProperties, strict object required, owner description
 * includes ref property docs.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 20 assertions (top level reference; IStrictMember definition exists; IStrictDetail definition exists; strict object additionalProperties; strict object required; owner description includes ref property docs).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (top level reference; IStrictMember definition exists; IStrictDetail definition exists; strict object additionalProperties; strict object required; owner description includes ref property docs) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_strict_converter_matrix is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
