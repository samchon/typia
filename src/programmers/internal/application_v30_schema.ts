import { OpenApiV3 } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { application_array } from "./application_array";
import { application_boolean } from "./application_boolean";
import { application_escaped } from "./application_escaped";
import { application_number } from "./application_number";
import { application_string } from "./application_string";
import { application_templates } from "./application_templates";
import { application_v30_alias } from "./application_v30_alias";
import { application_v30_constant } from "./application_v30_constant";
import { application_v30_native } from "./application_v30_native";
import { application_v30_object } from "./application_v30_object";
import { application_v30_tuple } from "./application_v30_tuple";

/**
 * @internal
 */
export const application_v30_schema =
  <BlockNever extends boolean>(blockNever: BlockNever) =>
  (components: OpenApiV3.IComponents) =>
  (attribute: OpenApiV3.IJsonSchema.__IAttribute) =>
  (
    meta: Metadata,
  ): BlockNever extends true
    ? OpenApiV3.IJsonSchema | null
    : OpenApiV3.IJsonSchema => {
    // VULNERABLE CASE
    if (meta.any === true)
      return {
        ...attribute,
        type: undefined,
      };
    else if (meta.nullable && meta.empty())
      return { type: "null", ...attribute };

    //----
    // GATHER UNION SCHEMAS
    //----
    const union: OpenApiV3.IJsonSchema[] = [];
    const insert = meta.nullable
      ? (schema: OpenApiV3.IJsonSchema) =>
          union.push({
            ...schema,
            nullable: (schema as OpenApiV3.IJsonSchema.__ISignificant<any>).type
              ? true
              : undefined,
          } as OpenApiV3.IJsonSchema)
      : (schema: OpenApiV3.IJsonSchema) => union.push(schema);

    // toJSON() METHOD
    if (meta.escaped !== null)
      application_escaped(application_v30_schema(false)(components)({}))(
        meta.escaped,
      ).forEach(insert);

    // ATOMIC TYPES
    if (meta.templates.length && AtomicPredicator.template(meta))
      insert(application_templates(meta));
    for (const constant of meta.constants)
      if (constant.type === "bigint") throw new TypeError(NO_BIGINT);
      else if (AtomicPredicator.constant(meta)(constant.type) === false)
        continue;
      else insert(application_v30_constant(constant));
    for (const a of meta.atomics)
      if (a.type === "bigint") throw new TypeError(NO_BIGINT);
      else if (a.type === "boolean") application_boolean(a).forEach(insert);
      else if (a.type === "number") application_number(a).forEach(insert);
      else if (a.type === "string") application_string(a).forEach(insert);

    // ARRAY
    for (const array of meta.arrays)
      application_array(application_v30_schema(false)(components)({}))(
        array,
      ).forEach(insert);

    // TUPLE
    for (const tuple of meta.tuples)
      insert(application_v30_tuple(components)(tuple)(attribute));

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
            )[0]!,
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
      } else insert(application_v30_native(components)(native)(meta.nullable));
    if (meta.sets.length)
      insert(application_v30_native(components)(`Set`)(meta.nullable));
    if (meta.maps.length)
      insert(application_v30_native(components)(`Map`)(meta.nullable));

    // OBJECT
    for (const obj of meta.objects)
      insert(application_v30_object(components)(obj)(meta.nullable));

    // ALIASES
    for (const alias of meta.aliases)
      insert(
        application_v30_alias(blockNever)(components)(alias)(meta.nullable),
      );

    //----
    // RETURNS
    //----
    if (union.length === 0 && blockNever === true) return null!;
    const schema: OpenApiV3.IJsonSchema =
      union.length === 0
        ? { type: undefined }
        : union.length === 1
          ? union[0]!
          : { oneOf: union };
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
