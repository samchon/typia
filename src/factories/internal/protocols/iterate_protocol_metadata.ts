import { IMetadataTag } from "../../../metadata/IMetadataTag";
import { Metadata } from "../../../metadata/Metadata";

import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { IProtocolProperty } from "../../../messages/IProtocolProperty";
import { iterate_protocol_atomic } from "./iterate_protocol_atomic";
import { iterate_protocol_constant } from "./iterate_protocol_constant";
import { iterate_protocol_map } from "./iterate_protocol_map";
import { iterate_protocol_native } from "./iterate_protocol_native";
import { iterate_protocol_repeated } from "./iterate_protocol_repeated";
import { iterate_protocol_tuple } from "./iterate_protocol_tuple";

export const iterate_protocol_metadata =
    (dict: Map<string, IProtocolMessage>) =>
    (meta: Metadata) =>
    (tags: IMetadataTag[]): Omit<IProtocolProperty, "key"> => {
        // PREPARE ASSETS
        const required: boolean = meta.required && !meta.nullable;
        const oneOf: IProtocolProperty.IOneOf[] = [];

        const add = (type: string) => {
            if (oneOf.some((one) => one.type === type)) return;
            oneOf.push({
                type,
            });
        };

        // WHEN SINGULAR ARRAY TYPE
        if (meta.size() === 1 && meta.arrays.length + meta.sets.length === 1) {
            const [container, child] =
                meta.arrays.length === 1
                    ? (["Array", meta.arrays[0]!] as const)
                    : (["Set", meta.sets[0]!] as const);
            add(iterate_protocol_repeated(container)(true)(dict)(child)(tags));
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

        // INSTANCE TYPES
        for (const obj of meta.objects)
            if (obj.properties.some((p) => !p.key.isSoleLiteral())) {
                for (const prop of obj.properties)
                    add(
                        iterate_protocol_map("Object")(dict)(prop.key)(
                            prop.value,
                        ),
                    );
            } else add(obj.name);
        for (const native of meta.natives)
            add(iterate_protocol_native(dict)(native));
        for (const tuple of meta.tuples)
            add(iterate_protocol_tuple(dict)(tuple));
        for (const array of meta.arrays)
            add(iterate_protocol_repeated("Array")(false)(dict)(array)(tags));
        for (const set of meta.sets)
            add(iterate_protocol_repeated("Set")(false)(dict)(set)(tags));
        for (const map of meta.maps)
            add(iterate_protocol_map("Map")(dict)(map.key)(map.value));

        // RETURNS
        return {
            required,
            oneOf,
            repeated: false,
        };
    };
