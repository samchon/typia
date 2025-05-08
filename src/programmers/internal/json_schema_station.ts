import { OpenApi } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";
import { MetadataNative } from "../../schemas/metadata/MetadataNative";

import { OpenApiExclusiveEmender } from "@samchon/openapi/lib/utils/OpenApiExclusiveEmender";

import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { json_schema_alias } from "./json_schema_alias";
import { json_schema_array } from "./json_schema_array";
import { json_schema_bigint } from "./json_schema_bigint";
import { json_schema_boolean } from "./json_schema_boolean";
import { json_schema_constant } from "./json_schema_constant";
import { json_schema_discriminator } from "./json_schema_discriminator";
import { json_schema_escaped } from "./json_schema_escaped";
import { json_schema_native } from "./json_schema_native";
import { json_schema_number } from "./json_schema_number";
import { json_schema_object } from "./json_schema_object";
import { json_schema_string } from "./json_schema_string";
import { json_schema_templates } from "./json_schema_template";
import { json_schema_tuple } from "./json_schema_tuple";

export const json_schema_station = <BlockNever extends boolean>(props: {
  blockNever: BlockNever;
  components: OpenApi.IComponents;
  attribute: OpenApi.IJsonSchema.__IAttribute;
  metadata: Metadata;
}): BlockNever extends true
  ? OpenApi.IJsonSchema | null
  : OpenApi.IJsonSchema => {
  if (props.metadata.any === true)
    return {
      ...props.attribute,
      type: undefined,
    };

  //----
  // GATHER UNION SCHEMAS
  //----
  const union: OpenApi.IJsonSchema[] = [];
  const insert = (schema: OpenApi.IJsonSchema) => union.push(schema);

  // NULLABLE
  if (props.metadata.nullable === true)
    insert({
      type: "null",
    });

  // toJSON() METHOD
  if (props.metadata.escaped !== null)
    json_schema_escaped({
      components: props.components,
      escaped: props.metadata.escaped,
    }).forEach(insert);

  // ATOMIC TYPES
  if (
    props.metadata.templates.length &&
    AtomicPredicator.template(props.metadata)
  )
    json_schema_templates(props.metadata).forEach(insert);
  for (const constant of props.metadata.constants)
    if (
      AtomicPredicator.constant({
        metadata: props.metadata,
        name: constant.type,
      }) === false
    )
      continue;
    else json_schema_constant(constant).forEach(insert);
  for (const a of props.metadata.atomics)
    if (a.type === "boolean") json_schema_boolean(a).forEach(insert);
    else if (a.type === "bigint") json_schema_bigint(a).forEach(insert);
    else if (a.type === "number")
      json_schema_number(a).map(OpenApiExclusiveEmender.emend).forEach(insert);
    else if (a.type === "string") json_schema_string(a).forEach(insert);

  // ARRAY
  for (const array of props.metadata.arrays)
    json_schema_array({
      components: props.components,
      array,
    }).forEach(insert);

  // TUPLE
  for (const tuple of props.metadata.tuples)
    insert(
      json_schema_tuple({
        components: props.components,
        tuple,
      }),
    );

  // NATIVES
  for (const native of props.metadata.natives)
    if (AtomicPredicator.native(native.name)) {
      const type: string = native.name.toLowerCase();
      if (props.metadata.atomics.some((a) => a.type === type)) continue;
      else if (type === "boolean")
        json_schema_boolean(
          MetadataAtomic.create({
            type: "boolean",
            tags: [],
          }),
        ).map(insert);
      else if (type === "bigint")
        json_schema_bigint(
          MetadataAtomic.create({
            type: "bigint",
            tags: [],
          }),
        ).map(insert);
      else if (type === "number")
        json_schema_number(
          MetadataAtomic.create({
            type: "number",
            tags: [],
          }),
        ).map(insert);
      else if (type === "string")
        json_schema_string(
          MetadataAtomic.create({
            type: "string",
            tags: [],
          }),
        ).map(insert);
    } else
      json_schema_native({
        components: props.components,
        native,
      }).forEach(insert);
  if (props.metadata.sets.length)
    json_schema_native({
      native: MetadataNative.create({
        name: "Set",
        tags: [],
      }),
      components: props.components,
    }).forEach(insert);
  if (props.metadata.maps.length)
    json_schema_native({
      native: MetadataNative.create({
        name: "Map",
        tags: [],
      }),
      components: props.components,
    }).forEach(insert);

  // OBJECT
  for (const object of props.metadata.objects)
    json_schema_object({
      components: props.components,
      object,
    }).forEach(insert);

  // ALIASES
  for (const alias of props.metadata.aliases)
    json_schema_alias({
      alias,
      blockNever: props.blockNever,
      components: props.components,
    }).forEach(insert);

  //----
  // RETURNS
  //----
  if (union.length === 0 && props.blockNever === true) return null!;
  const schema: OpenApi.IJsonSchema =
    union.length === 0
      ? { type: undefined }
      : union.length === 1
        ? union[0]!
        : {
            oneOf: union,
            discriminator: json_schema_discriminator(props.metadata),
          };
  return {
    ...schema,
    ...props.attribute,
    title: props.attribute.title ?? schema.title,
    description: props.attribute.description ?? schema.description,
    deprecated: props.attribute.deprecated ?? schema.deprecated,
  };
};
