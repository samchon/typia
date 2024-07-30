import { OpenApi } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { application_array } from "./application_array";
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
export const application_v31_schema =
  <BlockNever extends boolean>(blockNever: BlockNever) =>
  (components: OpenApi.IComponents) =>
  (attribute: OpenApi.IJsonSchema.__IAttribute) =>
  (
    meta: Metadata,
  ): BlockNever extends true
    ? OpenApi.IJsonSchema | null
    : OpenApi.IJsonSchema => {
    if (meta.any === true)
      return {
        ...attribute,
        type: undefined,
      };

    //----
    // GATHER UNION SCHEMAS
    //----
    const union: OpenApi.IJsonSchema[] = [];
    const insert = (schema: OpenApi.IJsonSchema) => union.push(schema);

    // NULLABLE
    if (meta.nullable === true)
      insert({
        type: "null",
      });

    // toJSON() METHOD
    if (meta.escaped !== null)
      application_escaped(application_v31_schema(false)(components)({}))(
        meta.escaped,
      ).forEach(insert as any);

    // ATOMIC TYPES
    if (meta.templates.length && AtomicPredicator.template(meta))
      application_templates(meta).map(insert as any);
    for (const constant of meta.constants)
      if (constant.type === "bigint") throw new TypeError(NO_BIGINT);
      else if (AtomicPredicator.constant(meta)(constant.type) === false)
        continue;
      else application_v31_constant(constant).map(insert);
    for (const a of meta.atomics)
      if (a.type === "bigint") throw new TypeError(NO_BIGINT);
      else if (a.type === "boolean")
        application_boolean(a).forEach(insert as any);
      else if (a.type === "number")
        application_number(a).forEach(insert as any);
      else if (a.type === "string")
        application_string(a).forEach(insert as any);

    // ARRAY
    for (const array of meta.arrays)
      application_array(application_v31_schema(false)(components)({}))(
        components,
      )(array).forEach(insert as any);

    // TUPLE
    for (const tuple of meta.tuples)
      insert(
        application_v31_tuple(application_v31_schema(false)(components)({}))(
          tuple,
        ),
      );

    // NATIVES
    for (const native of meta.natives)
      if (AtomicPredicator.native(native)) {
        const type: string = native.toLowerCase();
        if (meta.atomics.some((a) => a.type === type)) continue;
        else if (type === "bigint") throw new TypeError(NO_BIGINT);
        else if (type === "boolean")
          insert(
            application_boolean(
              MetadataAtomic.create({
                type: "boolean",
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
      } else insert(application_v31_native(components)(native));
    if (meta.sets.length) insert(application_v31_native(components)(`Set`));
    if (meta.maps.length) insert(application_v31_native(components)(`Map`));

    // OBJECT
    for (const obj of meta.objects)
      insert(application_v31_object(components)(obj));

    // ALIASES
    for (const alias of meta.aliases)
      insert(application_v31_alias(blockNever)(components)(alias));

    //----
    // RETURNS
    //----
    if (union.length === 0 && blockNever === true) return null!;
    const schema: OpenApi.IJsonSchema =
      union.length === 0
        ? { type: undefined }
        : union.length === 1
          ? union[0]!
          : {
              oneOf: union,
              discriminator: application_union_discriminator(meta),
            };
    return {
      ...schema,
      ...attribute,
      title: attribute.title ?? schema.title,
      description: attribute.description ?? schema.description,
      deprecated: attribute.deprecated ?? schema.deprecated,
    };
  };

/**
 * @internal
 */
const NO_BIGINT = "Error on typia.application(): does not allow bigint type.";
