import { IMetadataTag } from "../../../metadata/IMetadataTag";
import { Metadata } from "../../../metadata/Metadata";

import { IProtocolMap } from "../../../messages/IProtocolMap";
import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { IProtocolProperty } from "../../../messages/IProtocolProperty";
import { iterate_protocol_atomic } from "./iterate_protocol_atomic";
import { iterate_protocol_constant } from "./iterate_protocol_constant";
import { iterate_protocol_map } from "./iterate_protocol_map";
import { iterate_protocol_native } from "./iterate_protocol_native";
import { iterate_protocol_never } from "./iterate_protocol_never";
import { iterate_protocol_object } from "./iterate_protocol_object";
import { iterate_protocol_repeated } from "./iterate_protocol_repeated";
import { iterate_protocol_tuple } from "./iterate_protocol_tuple";

export const iterate_protocol_metadata =
    (dict: Map<string, IProtocolMessage>) =>
    (meta: Metadata) =>
    (tags: IMetadataTag[]): Omit<IProtocolProperty, "key"> => {
        // PREPARE ASSETS
        const sole: boolean = meta.size() === 1;
        const bucket: boolean = sole && meta.bucket() === 1;
        const required: boolean =
            (meta.required && !meta.nullable) ||
            (sole &&
                (meta.arrays.length === 1 ||
                    meta.sets.length === 1 ||
                    meta.maps.length === 1 ||
                    (meta.objects.length === 1 &&
                        meta.objects[0]!.properties.length === 1 &&
                        !meta.objects[0]!.properties[0]?.key.isSoleLiteral())));

        const oneOf: IProtocolProperty.IOneOf[] = [];
        const add = (type: string | IProtocolMap) => {
            if (oneOf.some((one) => one.type === type)) return;
            oneOf.push({
                type,
            });
        };

        // WHEN SINGULAR ARRAY TYPE
        if (sole && meta.arrays.length + meta.sets.length === 1) {
            const [container, child] =
                meta.arrays.length === 1
                    ? (["Array", meta.arrays[0]!.value] as const)
                    : (["Set", meta.sets[0]!] as const);
            add(
                iterate_protocol_repeated(container)(true, true)(dict)(child)(
                    tags,
                ),
            );
            return {
                required,
                oneOf,
                repeated: true,
            };
        }

        // ATOMIC TYPES
        for (const type of meta.atomics)
            add(iterate_protocol_atomic(tags)(type));
        for (const constant of meta.constants)
            add(iterate_protocol_constant(constant));
        if (meta.templates.length) add("string");
        if (meta.size() === 0) add(iterate_protocol_never());

        // OBJECT TYPES
        for (const obj of meta.objects)
            add(iterate_protocol_object(sole)(dict)(obj));
        for (const map of meta.maps) add(iterate_protocol_map(sole)(dict)(map));
        for (const native of meta.natives)
            add(iterate_protocol_native(dict)(native));

        // ARRAY TYPES
        for (const tuple of meta.tuples)
            add(iterate_protocol_tuple(dict)(tuple.elements));
        for (const array of meta.arrays)
            add(
                iterate_protocol_repeated("Array")(false, bucket)(dict)(
                    array.value,
                )(tags),
            );
        for (const set of meta.sets)
            add(
                iterate_protocol_repeated("Set")(false, bucket)(dict)(set)(
                    tags,
                ),
            );

        // RETURNS
        return {
            required,
            oneOf,
            repeated: false,
        };
    };
