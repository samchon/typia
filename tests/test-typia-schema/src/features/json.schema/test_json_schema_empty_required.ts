import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiValidator } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies JSON schema omits empty `required` arrays.
 *
 * Locks the OpenAPI/JSON Schema boundary for objects without required named
 * properties. Draft-04 and OpenAPI 3.0 reject `required: []`, while objects
 * with at least one required property must still emit the keyword.
 *
 * 1. Generate schemas for optional-only, filtered, record, and required objects.
 * 2. Assert empty required lists are omitted and optional fields stay optional.
 * 3. Assert non-empty required properties are still listed.
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
  TestValidator.equals(
    "optional-only required omitted",
    hasOwn(optionalOnly, "required"),
    false,
  );
  TestValidator.equals("optional-only properties", sorted(optionalOnly), [
    "count",
    "title",
  ]);
  TestValidator.equals(
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
  TestValidator.equals("filtered-only properties", sorted(filteredOnly), []);
  TestValidator.equals(
    "filtered-only required omitted",
    hasOwn(filteredOnly, "required"),
    false,
  );

  const record = typia.json.schema<Record<string, string & tags.MinLength<1>>>()
    .schema as OpenApi.IJsonSchema.IObject;
  TestValidator.equals(
    "record required omitted",
    hasOwn(record, "required"),
    false,
  );

  const requiredOne = object(typia.json.schema<IRequiredOne>());
  TestValidator.equals("required property retained", requiredOne.required, [
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
