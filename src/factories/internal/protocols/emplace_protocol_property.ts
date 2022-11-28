import { Metadata } from "../../../metadata/Metadata";
import { MetadataObject } from "../../../metadata/MetadataObject";
import { MetadataProperty } from "../../../metadata/MetadataProperty";

import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { IProtocolProperty } from "../../../messages/IProtocolProperty";
import { MetadataCollection } from "../../MetadataCollection";
import { iterate_protocol_atomic } from "./iterate_protocol_atomic";
import { iterate_protocol_constant } from "./iterate_protocol_constant";

export const emplace_protocol_property =
    (_collection: MetadataCollection) =>
    (_dict: Map<string, IProtocolMessage>) =>
    (_object: MetadataObject) =>
    (_message: IProtocolMessage) =>
    (property: MetadataProperty) =>
    (repeat: boolean): IProtocolProperty => {
        const meta: Metadata = property.value;
        const oneOf: IProtocolProperty.IOneOf[] = [];
        const add = (repeat: boolean) => (type: string) => {
            if (oneOf.some((one) => one.type === type)) return;
            oneOf.push({
                type,
                repeat,
            });
        };

        // ATOMIC TYPES
        iterate_protocol_atomic(add(repeat))(property.tags)(meta.atomics);
        iterate_protocol_constant(add(repeat))(meta.constants);
        if (meta.templates.length) add(repeat)("string");

        // INSTANCE TYPES
        for (const obj of meta.objects) add(repeat)(obj.name);
        for (const native of meta.natives) add(repeat)(native);

        return {
            key: property.key.getSoleLiteral()!,
            required: meta.required && !meta.nullable,
            oneOf,
        };
    };
