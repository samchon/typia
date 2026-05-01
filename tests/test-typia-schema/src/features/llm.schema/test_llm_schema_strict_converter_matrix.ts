import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

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

  TestValidator.equals("top level reference", schema, {
    $ref: "#/$defs/IStrictMember",
  });
  TestValidator.predicate("IStrictMember definition exists", () =>
    isObject($defs.IStrictMember),
  );
  TestValidator.predicate("IStrictDetail definition exists", () =>
    isObject($defs.IStrictDetail),
  );

  const member = $defs.IStrictMember as ILlmSchema.IObject;
  TestValidator.equals(
    "strict object additionalProperties",
    member.additionalProperties,
    false,
  );
  TestValidator.equals("strict object required", sorted(member.required), [
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
    TestValidator.equals(
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
    TestValidator.equals(
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
    TestValidator.equals(
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

  TestValidator.equals(
    "strict ref description removed",
    member.properties.detail,
    {
      $ref: "#/$defs/IStrictDetail",
    },
  );

  const detail = $defs.IStrictDetail as ILlmSchema.IObject;
  TestValidator.equals(
    "nested strict additionalProperties",
    detail.additionalProperties,
    false,
  );
  TestValidator.equals("nested strict required", sorted(detail.required), [
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
