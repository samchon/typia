import { Metadata } from "../../metadata/Metadata";
import { IJsonComponents } from "../../schemas/IJsonComponents";
import { IJsonSchema } from "../../schemas/IJsonSchema";

import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { application_array } from "./application_array";
import { application_boolean } from "./application_boolean";
import { application_constant } from "./application_constant";
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
    (options: ApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    <BlockNever extends boolean>(blockNever: BlockNever) =>
    (
        meta: Metadata,
        attribute: IJsonSchema.IAttribute,
    ): BlockNever extends true ? IJsonSchema | null : IJsonSchema => {
        // VULNERABLE CASE
        if (meta.any === true) return {};
        else if (meta.nullable && meta.empty())
            return { type: "null", ...attribute };

        //----
        // GATHER UNION SCHEMAS
        //----
        const union: IJsonSchema[] = [];

        // toJSON() METHOD
        if (meta.resolved !== null) {
            const resolved = application_schema(options)(components)(
                blockNever,
            )(meta.resolved, attribute);
            if (resolved !== null) union.push(resolved);
        }

        // ATOMIC TYPES
        if (meta.templates.length && AtomicPredicator.template(meta))
            union.push(application_templates(meta, attribute));
        for (const constant of meta.constants)
            if (constant.type === "bigint") throw new Error(NO_BIGINT);
            else if (
                (constant.type === "string" && meta.templates.length) ||
                AtomicPredicator.constant(meta)(constant.type) === false
            )
                continue;
            else
                union.push(
                    application_constant(constant, meta.nullable, attribute),
                );
        for (const type of meta.atomics)
            if (type === "bigint") throw new Error(NO_BIGINT);
            else if (AtomicPredicator.atomic(meta)(type) === false) continue;
            else
                union.push(
                    type === "string"
                        ? application_string(meta, attribute)
                        : type === "boolean"
                        ? application_boolean(meta.nullable, attribute)
                        : application_number(meta.nullable, attribute),
                );

        // ARRAY
        for (const schema of meta.arrays.values())
            union.push(
                application_array(options)(components)()(
                    schema,
                    meta.nullable,
                    attribute,
                ),
            );

        // TUPLE
        for (const items of meta.tuples) {
            const tuple: IJsonSchema.ITuple = application_tuple(options)(
                components,
            )(items, meta.nullable, attribute);
            if (options.purpose === "swagger" && items.length === 0)
                throw new Error(
                    "Error on typia.application(): swagger does not support zero length tuple type.",
                );
            else if (
                options.purpose === "ajv" &&
                !items[items.length - 1]?.rest
            )
                union.push(tuple);
            else {
                // SWAGGER DOES NOT SUPPORT TUPLE TYPE YET
                const merged: Metadata = items.reduce((x, y) =>
                    Metadata.merge(x, y),
                );
                union.push(
                    application_array(options)(components)(tuple)(
                        merged,
                        merged?.nullable || false,
                        attribute,
                    ),
                );
            }
        }

        // NATIVES
        for (const native of meta.natives)
            if (AtomicPredicator.native(native))
                union.push(
                    native === "String"
                        ? application_string(meta, attribute)
                        : native === "Boolean"
                        ? application_boolean(meta.nullable, attribute)
                        : application_number(meta.nullable, attribute),
                );
            else
                union.push(
                    application_native(options)(components)(native)(
                        meta.nullable,
                        attribute,
                    ),
                );
        if (meta.sets.length)
            union.push(
                application_native(options)(components)(`Set`)(
                    meta.nullable,
                    attribute,
                ),
            );
        if (meta.maps.length)
            union.push(
                application_native(options)(components)(`Map`)(
                    meta.nullable,
                    attribute,
                ),
            );

        // OBJECT
        for (const obj of meta.objects) {
            const key: string = obj.name + (meta.nullable ? ".Nullable" : "");
            application_object(options)(components)(key, obj, meta.nullable);
            union.push(
                (options.purpose === "ajv" && obj.recursive
                    ? recursive
                    : reference)(`${options.prefix}/${key}`, attribute),
            );
        }

        //----
        // RETURNS
        //----
        if (union.length === 0) return blockNever === true ? null! : {};
        else if (union.length === 1) return union[0]!;
        return { oneOf: union, ...attribute };
    };

/**
 * @internal
 */
const reference = (
    $ref: string,
    attribute: IJsonSchema.IAttribute,
): IJsonSchema.IReference => ({
    $ref,
    ...attribute,
});

/**
 * @internal
 */
const recursive = (
    $recursiveRef: string,
    attribute: IJsonSchema.IAttribute,
): IJsonSchema.IRecursiveReference => ({
    $recursiveRef,
    ...attribute,
});

const NO_BIGINT = "Error on typia.application(): does not allow bigint type.";
