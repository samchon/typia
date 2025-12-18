import { OpenApi } from "@samchon/openapi";

import { MetadataConstant } from "../../schemas/metadata/MetadataConstant";

import { json_schema_description } from "./json_schema_description";
import { json_schema_plugin } from "./json_schema_plugin";
import { json_schema_title } from "./json_schema_title";

/**
 * Generate JSON schema for a constant.
 * If the constant has an enumName, it will be registered as a reusable schema component.
 */
export const json_schema_constant = (
  constant: MetadataConstant,
): OpenApi.IJsonSchema.IConstant[] =>
  constant.values
    .map((value) =>
      json_schema_plugin({
        schema: {
          const:
            typeof value.value === "bigint"
              ? Number(value.value)
              : (value.value as boolean | number | string),
          title: json_schema_title(value),
          description: json_schema_description(value),
        } satisfies OpenApi.IJsonSchema.IConstant,
        tags: value.tags ?? [],
      }),
    )
    .flat();

/**
 * Generate a $ref schema for an enum constant.
 * This creates a reusable enum schema in components/schemas and returns a reference to it.
 */
export const json_schema_enum_ref = (props: {
  components: OpenApi.IComponents;
  constant: MetadataConstant;
}): OpenApi.IJsonSchema.IReference[] => {
  const { components, constant } = props;
  const enumName = constant.enumName;

  if (!enumName) {
    return [];
  }

  const $ref = `#/components/schemas/${enumName}`;

  // Check if schema already exists
  if (components.schemas?.[enumName] === undefined) {
    // Create the enum schema
    components.schemas ??= {};

    const enumValues = constant.values.map((v) =>
      typeof v.value === "bigint" ? Number(v.value) : v.value,
    );

    const schemaType =
      constant.type === "bigint"
        ? "number"
        : (constant.type as "boolean" | "number" | "string");

    components.schemas[enumName] = {
      type: schemaType,
      enum: enumValues,
    } as OpenApi.IJsonSchema;
  }

  return [{ $ref }];
};
