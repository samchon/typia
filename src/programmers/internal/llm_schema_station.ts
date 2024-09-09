import { ILlmSchema } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { application_bigint } from "./application_bigint";
import { application_boolean } from "./application_boolean";
import { application_number } from "./application_number";
import { application_string } from "./application_string";
import { application_templates } from "./application_templates";
import { application_v30_constant } from "./application_v30_constant";
import { llm_schema_array } from "./llm_schema_array";
import { llm_schema_escaped } from "./llm_schema_escaped";
import { llm_schema_native } from "./llm_schema_native";
import { llm_schema_object } from "./llm_schema_object";
import { llm_schema_tuple } from "./llm_schema_tuple";

/**
 * @internal
 */
export const llm_schema_station = (props: {
  metadata: Metadata;
  blockNever: boolean;
  attribute: ILlmSchema.__IAttribute;
}): ILlmSchema => {
  // VULNERABLE CASE
  if (props.metadata.any === true)
    return {
      ...props.attribute,
      type: undefined,
    };
  else if (props.metadata.nullable === true && props.metadata.empty() === true)
    return {
      ...props.attribute,
      type: "null",
    };

  //----
  // GATHER UNION SCHEMAS
  //----
  const union: ILlmSchema[] = [];
  const insert = props.metadata.nullable
    ? (schema: ILlmSchema) =>
        union.push({
          ...schema,
          nullable: (schema as ILlmSchema.__ISignificant<any>).type
            ? true
            : undefined,
        } as ILlmSchema)
    : (schema: ILlmSchema) => union.push(schema);

  // toJSON() METHOD
  if (props.metadata.escaped !== null)
    llm_schema_escaped(props.metadata.escaped).forEach(insert);

  // ATOMIC TYPES
  if (
    props.metadata.templates.length &&
    AtomicPredicator.template(props.metadata)
  )
    application_templates<"3.0">(props.metadata).map(insert);
  for (const constant of props.metadata.constants)
    if (AtomicPredicator.constant(props.metadata)(constant.type) === false)
      continue;
    else insert(application_v30_constant(constant));
  for (const a of props.metadata.atomics)
    if (a.type === "boolean") application_boolean<"3.0">(a).forEach(insert);
    else if (a.type === "bigint") application_bigint<"3.0">(a).forEach(insert);
    else if (a.type === "number") application_number<"3.0">(a).forEach(insert);
    else if (a.type === "string") application_string<"3.0">(a).forEach(insert);

  // ARRAY
  for (const array of props.metadata.arrays)
    if (array.type.recursive)
      throw new Error(
        "Error on LlmSchemaProgrammer.write(): LLM schema does not allow recursive array type.",
      );
    else llm_schema_array(array).forEach(insert);

  // TUPLE
  for (const tuple of props.metadata.tuples)
    if (tuple.type.recursive)
      throw new Error(
        "Error on LlmSchemaProgrammer.write(): LLM schema does not allow recursive tuple type.",
      );
    else
      insert(
        llm_schema_tuple({
          tuple,
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
          application_boolean<"3.0">(
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
    } else insert(llm_schema_native(native));
  if (props.metadata.sets.length) insert(llm_schema_native("Set"));
  if (props.metadata.maps.length) insert(llm_schema_native("Map"));

  // OBJECT
  for (const object of props.metadata.objects)
    if (object.recursive)
      throw new Error(
        "Error on LlmSchemaProgrammer.write(): LLM schema does not allow recursive object type.",
      );
    else
      insert(
        llm_schema_object({
          object,
          nullable: props.metadata.nullable,
        }),
      );

  // ALIASES
  for (const alias of props.metadata.aliases)
    if (alias.recursive)
      throw new Error(
        "Error on LlmSchemaProgrammer.write(): LLM schema does not allow recursive alias type.",
      );
    else
      insert(
        llm_schema_station({
          ...props,
          metadata: alias.value,
        }),
      );

  //----
  // RETURNS
  //----
  if (union.length === 0 && props.blockNever === true) return null!;
  const schema: ILlmSchema =
    union.length === 0
      ? { type: undefined }
      : union.length === 1
        ? union[0]!
        : { oneOf: union };
  return {
    ...schema,
    ...props.attribute,
    title: props.attribute.title ?? schema.title,
    description: props.attribute.description ?? schema.description,
    deprecated: props.attribute.deprecated ?? schema.deprecated,
  };
};
