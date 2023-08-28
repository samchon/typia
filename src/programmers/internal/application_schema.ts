import { IJsonComponents } from "../../schemas/json/IJsonComponents";
import { IJsonSchema } from "../../schemas/json/IJsonSchema";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { application_alias } from "./application_alias";
import { application_array } from "./application_array";
import { application_boolean } from "./application_boolean";
import { application_constant } from "./application_constant";
import { application_escaped } from "./application_escaped";
import { application_native } from "./application_native";
import { application_number } from "./application_number";
import { application_object } from "./application_object";
import { application_string } from "./application_string";
import { application_templates } from "./application_templates";
import { application_tuple } from "./application_tuple";

/**
 * @internal
 */
export const application_schema =
    (options: JsonApplicationProgrammer.IOptions) =>
    <BlockNever extends boolean>(blockNever: BlockNever) =>
    (components: IJsonComponents) =>
    (meta: Metadata) =>
    (
        attribute: IJsonSchema.IAttribute,
    ): BlockNever extends true ? IJsonSchema | null : IJsonSchema => {
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
        const union: IJsonSchema[] = [];
        if (meta.nullable && options.purpose !== "swagger")
            union.push({
                ...attribute,
                type: "null",
            });

        const insert =
            meta.nullable && options.purpose === "swagger"
                ? (s: IJsonSchema) =>
                      union.push({
                          ...s,
                          nullable: (s as IJsonSchema.ISignificant<any>).type
                              ? true
                              : undefined,
                      } as IJsonSchema)
                : (schema: IJsonSchema) => union.push(schema);

        // toJSON() METHOD
        if (meta.escaped !== null)
            union.push(
                ...application_escaped(options)(blockNever)(components)(
                    meta.escaped,
                )(attribute),
            );

        // ATOMIC TYPES
        if (meta.templates.length && AtomicPredicator.template(meta))
            insert(application_templates(meta)(attribute));
        for (const constant of meta.constants)
            if (constant.type === "bigint") throw new TypeError(NO_BIGINT);
            else if (
                (constant.type === "string" && meta.templates.length) ||
                AtomicPredicator.constant(meta)(constant.type) === false
            )
                continue;
            else insert(application_constant(constant)(attribute));
        for (const a of meta.atomics)
            if (a.type === "bigint") throw new TypeError(NO_BIGINT);
            else if (a.type === "boolean")
                insert(application_boolean(attribute));
            else if (a.type === "number")
                application_number(a)(attribute).forEach((s) => insert(s));
            else if (a.type === "string")
                application_string(meta)(a)(attribute).forEach((s) =>
                    insert(s),
                );

        // ARRAY
        for (const array of meta.arrays)
            application_array(options)(components)(array)(attribute).forEach(
                (s) => insert(s),
            );

        // TUPLE
        for (const tuple of meta.tuples)
            insert(application_tuple(options)(components)(tuple)(attribute));

        // NATIVES
        for (const native of meta.natives)
            if (AtomicPredicator.native(native)) {
                const type: string = native.toLowerCase();
                if (meta.atomics.some((a) => a.type === type)) continue;
                else if (type === "bigint") throw new TypeError(NO_BIGINT);
                else if (type === "boolean")
                    insert(application_boolean(attribute));
                else if (type === "number")
                    insert(
                        application_number(
                            MetadataAtomic.create({
                                type: "number",
                                tags: [],
                            }),
                        )(attribute)[0]!,
                    );
                else if (type === "string")
                    insert(
                        application_string(meta)(
                            MetadataAtomic.create({
                                type: "string",
                                tags: [],
                            }),
                        )(attribute)[0]!,
                    );
            } else
                insert(
                    application_native(options)(components)(native)({
                        nullable: meta.nullable,
                        attribute,
                    }),
                );
        if (meta.sets.length)
            insert(
                application_native(options)(components)(`Set`)({
                    nullable: meta.nullable,
                    attribute,
                }),
            );
        if (meta.maps.length)
            insert(
                application_native(options)(components)(`Map`)({
                    nullable: meta.nullable,
                    attribute,
                }),
            );

        // OBJECT
        for (const obj of meta.objects)
            insert(application_object(options)(components)(obj)(meta.nullable));

        // ALIASES
        for (const alias of meta.aliases)
            insert(
                application_alias(options)(blockNever)(components)(alias)(
                    meta.nullable,
                ),
            );

        //----
        // RETURNS
        //----
        if (union.length === 0)
            return blockNever === true
                ? null!
                : {
                      ...attribute,
                      type: undefined,
                  };
        else if (union.length === 1) return union[0]!;
        return { oneOf: union, ...attribute };
    };

const NO_BIGINT = "Error on typia.application(): does not allow bigint type.";
