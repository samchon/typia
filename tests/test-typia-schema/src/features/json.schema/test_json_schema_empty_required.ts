import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiValidator } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies JSON schema keeps empty object keywords on named objects.
 *
 * Locks the JSON schema boundary for named objects without required properties.
 * Empty objects still need explicit `properties: {}` and `required: []`; only
 * pure record schemas omit both named-object keywords.
 *
 * 1. Generate schemas for optional-only, filtered, record, and required objects.
 * 2. Assert named objects keep empty required lists and validate optionality.
 * 3. Assert pure record schemas omit named-object keywords.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 8 assertions (optional-only required; optional-only properties; optional-only validator; filtered-only properties; filtered-only required; record required omitted). The case documents its purpose as: Verifies JSON schema keeps empty object keywords on named objects.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Locks the JSON schema boundary for named objects without required properties. Empty objects still need explicit `properties: {}` and `required: []`; only pure record schemas omit both named-object keywords. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (optional-only required; optional-only properties; optional-only validator; filtered-only properties; filtered-only required; record required omitted) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_empty_required is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_empty_required = (): void => {
  interface IOptionalOnly {
    title?: string;
    count?: number;
  }
  interface IFilteredOnly {
    /** @ignore */
    secret: string;

    /** @ignore */
    ignored: number;

    /** @ignore */
    hidden: string;

    /** @internal */
    internal: boolean;
  }
  interface IRequiredOne {
    value: string;
    optional?: number;
  }

  const optionalOnly = object(typia.json.schema<IOptionalOnly>());
  TestEquality.equals("optional-only required", optionalOnly.required, []);
  TestEquality.equals("optional-only properties", sorted(optionalOnly), [
    "count",
    "title",
  ]);
  TestEquality.equals(
    "optional-only validator",
    OpenApiValidator.validate({
      components: { schemas: {} },
      schema: optionalOnly,
      value: {},
      required: true,
    }).success,
    true,
  );

  const filteredOnly = object(typia.json.schema<IFilteredOnly>());
  TestEquality.equals("filtered-only properties", filteredOnly.properties, {});
  TestEquality.equals("filtered-only required", filteredOnly.required, []);

  const record = typia.json.schema<Record<string, string & tags.MinLength<1>>>()
    .schema as OpenApi.IJsonSchema.IObject;
  TestEquality.equals(
    "record required omitted",
    hasOwn(record, "required"),
    false,
  );
  TestEquality.equals(
    "record properties omitted",
    hasOwn(record, "properties"),
    false,
  );

  const requiredOne = object(typia.json.schema<IRequiredOne>());
  TestEquality.equals("required property retained", requiredOne.required, [
    "value",
  ]);
};

const object = (unit: {
  schema: OpenApi.IJsonSchema;
  components: OpenApi.IComponents;
}): OpenApi.IJsonSchema.IObject => {
  if ("$ref" in unit.schema) {
    const key = unit.schema.$ref.split("/").at(-1)!;
    return unit.components.schemas![key] as OpenApi.IJsonSchema.IObject;
  }
  return unit.schema as OpenApi.IJsonSchema.IObject;
};

const sorted = (schema: OpenApi.IJsonSchema.IObject): string[] =>
  Object.keys(schema.properties ?? {}).sort();

const hasOwn = (obj: object, key: string): boolean =>
  Object.prototype.hasOwnProperty.call(obj, key);
