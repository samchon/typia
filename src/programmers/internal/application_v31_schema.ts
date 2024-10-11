import { OpenApi } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { application_array } from "./application_array";
import { application_bigint } from "./application_bigint";
import { application_boolean } from "./application_boolean";
import { application_escaped } from "./application_escaped";
import { application_number } from "./application_number";
import { application_string } from "./application_string";
import { application_templates } from "./application_templates";
import { application_union_discriminator } from "./application_union_discriminator";
import { application_v31_alias } from "./application_v31_alias";
import { application_v31_constant } from "./application_v31_constant";
import { application_v31_native } from "./application_v31_native";
import { application_v31_object } from "./application_v31_object";
import { application_v31_tuple } from "./application_v31_tuple";

/**
 * @internal
 */
export const application_v31_schema = <BlockNever extends boolean>(props: {
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
    application_escaped({
      generator: (metadata) =>
        application_v31_schema({
          blockNever: false as const,
          components: props.components,
          attribute: {},
          metadata,
        }),
      escaped: props.metadata.escaped,
    }).forEach(insert as any);

  // ATOMIC TYPES
  if (
    props.metadata.templates.length &&
    AtomicPredicator.template(props.metadata)
  )
    application_templates(props.metadata).map(insert as any);
  for (const constant of props.metadata.constants)
    if (
      AtomicPredicator.constant({
        metadata: props.metadata,
        name: constant.type,
      }) === false
    )
      continue;
    else application_v31_constant(constant).map(insert);
  for (const a of props.metadata.atomics)
    if (a.type === "boolean") application_boolean(a).forEach(insert as any);
    else if (a.type === "bigint") application_bigint(a).forEach(insert as any);
    else if (a.type === "number") application_number(a).forEach(insert as any);
    else if (a.type === "string") application_string(a).forEach(insert as any);

  // ARRAY
  for (const array of props.metadata.arrays)
    application_array({
      generator: (metadata) =>
        application_v31_schema({
          blockNever: false as const,
          components: props.components,
          attribute: {},
          metadata,
        }),
      components: props.components,
      array,
    }).forEach(insert as any);

  // TUPLE
  for (const tuple of props.metadata.tuples)
    insert(
      application_v31_tuple({
        generator: (metadata) =>
          application_v31_schema({
            blockNever: false as const,
            components: props.components,
            attribute: {},
            metadata,
          }),
        tuple,
      }),
    );

  // NATIVES
  for (const native of props.metadata.natives)
    if (AtomicPredicator.native(native)) {
      const type: string = native.toLowerCase();
      if (props.metadata.atomics.some((a) => a.type === type)) continue;
      else if (type === "boolean")
        insert(
          application_boolean(
            MetadataAtomic.create({
              type: "boolean",
              tags: [],
            }),
          )[0]! as any,
        );
      else if (type === "bigint")
        insert(
          application_bigint(
            MetadataAtomic.create({
              type: "bigint",
              tags: [],
            }),
          )[0]! as any,
        );
      else if (type === "number")
        insert(
          application_number(
            MetadataAtomic.create({
              type: "number",
              tags: [],
            }),
          )[0]! as any,
        );
      else if (type === "string")
        insert(
          application_string(
            MetadataAtomic.create({
              type: "string",
              tags: [],
            }),
          )[0]! as any,
        );
    } else
      insert(
        application_v31_native({
          components: props.components,
          name: native,
        }),
      );
  if (props.metadata.sets.length)
    insert(
      application_v31_native({
        name: "Set",
        components: props.components,
      }),
    );
  if (props.metadata.maps.length)
    insert(
      application_v31_native({
        name: "Map",
        components: props.components,
      }),
    );

  // OBJECT
  for (const object of props.metadata.objects)
    insert(
      application_v31_object({
        components: props.components,
        object: object.type,
      }),
    );

  // ALIASES
  for (const alias of props.metadata.aliases)
    insert(
      application_v31_alias({
        alias,
        blockNever: props.blockNever,
        components: props.components,
      }),
    );

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
            discriminator: application_union_discriminator(props.metadata),
          };
  return {
    ...schema,
    ...props.attribute,
    title: props.attribute.title ?? schema.title,
    description: props.attribute.description ?? schema.description,
    deprecated: props.attribute.deprecated ?? schema.deprecated,
  };
};
