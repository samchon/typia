import { Metadata } from "../../metadata/Metadata";
import { MetadataConstant } from "../../metadata/MetadataConstant";
import { IJsonComponents } from "../../schemas/IJsonComponents";
import { IJsonSchema } from "../../schemas/IJsonSchema";

import { ArrayUtil } from "../../utils/ArrayUtil";

import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { application_array } from "./application_array";
import { application_boolean } from "./application_boolean";
import { application_constant } from "./application_constant";
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

        // ATOMIC TYPES
        if (meta.templates.length) {
            union.push(application_templates(meta, attribute));
        }
        for (const constant of meta.constants) {
            if (constant.type === "string" && meta.templates.length) continue;
            union.push(
                application_constant(constant, meta.nullable, attribute),
            );
        }
        for (const type of meta.atomics) {
            union.push(
                type === "string"
                    ? application_string(meta, attribute)
                    : type === "number"
                    ? application_number(meta.nullable, attribute)
                    : application_boolean(meta.nullable, attribute),
            );
        }

        // ARRAY
        for (const schema of meta.arrays.values())
            union.push(
                application_array(options)(components)(
                    schema,
                    meta.nullable,
                    attribute,
                ),
            );

        // TUPLE
        for (const items of meta.tuples)
            if (options.purpose === "ajv")
                union.push(
                    application_tuple(options)(components)(
                        items,
                        meta.nullable,
                        attribute,
                    ),
                );
            else {
                // SWAGGER DOES NOT SUPPORT TUPLE TYPE YET
                const merged: Metadata = items.reduce((x, y) =>
                    merge_metadata(x, y),
                );
                union.push(
                    application_array(options)(components)(
                        merged,
                        merged?.nullable || false,
                        attribute,
                    ),
                );
            }

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

/**
 * @internal
 * @todo: not perfect
 */
function merge_metadata(x: Metadata, y: Metadata): Metadata {
    const output: Metadata = Metadata.create({
        any: x.any || y.any,
        nullable: x.nullable || y.nullable,
        required: x.required && y.required,
        functional: x.functional || y.functional,

        resolved:
            x.resolved !== null && y.resolved !== null
                ? merge_metadata(x.resolved, y.resolved)
                : x.resolved || y.resolved,
        atomics: [...new Set([...x.atomics, ...y.atomics])],
        constants: [...x.constants],
        templates: x.templates.slice(),
        arrays: x.arrays.slice(),
        tuples: x.tuples.slice(),
        objects: x.objects.slice(),

        natives: [...new Set([...x.natives, ...y.natives])],
        sets: x.sets.slice(),
        maps: x.maps.slice(),
    });
    for (const constant of y.constants) {
        const target: MetadataConstant = ArrayUtil.take(
            output.constants,
            (elem) => elem.type === constant.type,
            () => ({
                type: constant.type,
                values: [],
            }),
        );
        for (const value of constant.values)
            ArrayUtil.add(target.values, value);
    }
    for (const array of y.arrays)
        ArrayUtil.set(output.arrays, array, (elem) => elem.getName());
    for (const obj of y.objects)
        ArrayUtil.set(output.objects, obj, (elem) => elem.name);
    return output;
}
