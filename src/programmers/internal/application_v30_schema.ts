import { OpenApiV3 } from "@samchon/openapi";

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
import { application_v30_alias } from "./application_v30_alias";
import { application_v30_constant } from "./application_v30_constant";
import { application_v30_native } from "./application_v30_native";
import { application_v30_object } from "./application_v30_object";
import { application_v30_tuple } from "./application_v30_tuple";

/**
 * @internal
 */
export const application_v30_schema = <BlockNever extends boolean>(props: {
  blockNever: BlockNever;
  components: OpenApiV3.IComponents;
  attribute: OpenApiV3.IJsonSchema.__IAttribute;
  metadata: Metadata;
}): BlockNever extends true
  ? OpenApiV3.IJsonSchema | null
  : OpenApiV3.IJsonSchema => {
  // VULNERABLE CASE
  if (props.metadata.any === true)
    return {
      ...props.attribute,
      type: undefined,
    };
  else if (props.metadata.nullable && props.metadata.empty())
    return { type: "null", ...props.attribute };

  //----
  // GATHER UNION SCHEMAS
  //----
  const union: OpenApiV3.IJsonSchema[] = [];
  const insert = props.metadata.nullable
    ? (schema: OpenApiV3.IJsonSchema) =>
        union.push({
          ...schema,
          nullable: (schema as OpenApiV3.IJsonSchema.__ISignificant<any>).type
            ? true
            : undefined,
        } as OpenApiV3.IJsonSchema)
    : (schema: OpenApiV3.IJsonSchema) => union.push(schema);

  // toJSON() METHOD
  if (props.metadata.escaped !== null)
    application_escaped<"3.0">({
      generator: (metadata) =>
        application_v30_schema({
          blockNever: false,
          components: props.components,
          attribute: {},
          metadata,
        }),
      escaped: props.metadata.escaped,
    }).forEach(insert);

  // ATOMIC TYPES
  if (
    props.metadata.templates.length &&
    AtomicPredicator.template(props.metadata)
  )
    application_templates(props.metadata).map(insert);
  for (const constant of props.metadata.constants)
    if (
      AtomicPredicator.constant({
        metadata: props.metadata,
        name: constant.type,
      }) === false
    )
      continue;
    else insert(application_v30_constant(constant));
  for (const a of props.metadata.atomics)
    if (a.type === "boolean") application_boolean(a).forEach(insert);
    else if (a.type === "bigint") application_bigint(a).forEach(insert);
    else if (a.type === "number") application_number(a).forEach(insert);
    else if (a.type === "string") application_string(a).forEach(insert);

  // ARRAY
  for (const array of props.metadata.arrays)
    application_array<"3.0">({
      generator: (metadata) =>
        application_v30_schema({
          blockNever: false,
          components: props.components,
          attribute: {},
          metadata,
        }),
      components: props.components,
      array,
    }).forEach(insert);

  // TUPLE
  for (const tuple of props.metadata.tuples)
    insert(
      application_v30_tuple({
        tuple,
        components: props.components,
        attribute: props.attribute,
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
          )[0]!,
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
          )[0]!,
        );
      else if (type === "string")
        insert(
          application_string(
            MetadataAtomic.create({
              type: "string",
              tags: [],
            }),
          )[0]!,
        );
    } else
      insert(
        application_v30_native({
          name: native,
          components: props.components,
          nullable: props.metadata.nullable,
        }),
      );
  if (props.metadata.sets.length)
    insert(
      application_v30_native({
        name: "Set",
        components: props.components,
        nullable: props.metadata.nullable,
      }),
    );
  if (props.metadata.maps.length)
    insert(
      application_v30_native({
        name: "Map",
        components: props.components,
        nullable: props.metadata.nullable,
      }),
    );

  // OBJECT
  for (const object of props.metadata.objects)
    insert(
      application_v30_object({
        object: object.type,
        components: props.components,
        nullable: props.metadata.nullable,
      }),
    );

  // ALIASES
  for (const alias of props.metadata.aliases)
    insert(
      application_v30_alias({
        alias,
        blockNever: props.blockNever,
        components: props.components,
        nullable: props.metadata.nullable,
      }),
    );

  //----
  // RETURNS
  //----
  if (union.length === 0 && props.blockNever === true) return null!;
  const schema: OpenApiV3.IJsonSchema =
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
