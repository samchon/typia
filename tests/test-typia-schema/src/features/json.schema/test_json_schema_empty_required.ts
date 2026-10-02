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
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that optional-only and filtered named objects keep empty properties/required while pure records omit those keywords.
 * @evidence contracts/testing.md#independent-expectations Authored property lists and own-key tests reflect the declared named-object versus record distinction; requiredOne is a positive required-field control.
 * @evidence contracts/testing.md#distinguishing-cases Optional-only, fully ignored/internal, pure record and required-plus-optional objects remain; an empty value also exercises the utility validator.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_empty_required through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary The compiler must distinguish named object metadata from index-signature-only metadata. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Optional-only, fully ignored/internal, pure record and required-plus-optional objects remain; an empty value also exercises the utility validator. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
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
