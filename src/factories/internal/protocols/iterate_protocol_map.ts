import { Metadata } from "../../../metadata/Metadata";
import { MetadataObject } from "../../../metadata/MetadataObject";

import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { ProtocolMetadataUtil } from "./ProtocolMetadataUtil";
import { emplace_protocol_object } from "./emplace_protocol_object";
import { iterate_protocol_atomic } from "./iterate_protocol_atomic";
import { iterate_protocol_constant } from "./iterate_protocol_constant";

export const iterate_protocol_map =
    (container: "Object" | "Map") =>
    (dict: Map<string, IProtocolMessage>) =>
    (key: Metadata) =>
    (value: Metadata) =>
        `map<${getKeyName(key)}, ${getValueName(container)(dict)(value)}>`;

const getKeyName = (meta: Metadata) => {
    for (const atomic of meta.atomics)
        return iterate_protocol_atomic([])(atomic);
    for (const constant of meta.constants)
        return iterate_protocol_constant(constant);
    return "string";
};

const getValueName =
    (container: "Object" | "Map") =>
    (dict: Map<string, IProtocolMessage>) =>
    (meta: Metadata) => {
        if (ProtocolMetadataUtil.standalone(meta)) return meta.getName();

        const obj: MetadataObject = ProtocolMetadataUtil.object(
            `${container}.Value<${meta.getName()}>`,
            dict.size,
        );
        obj.properties.push(ProtocolMetadataUtil.property("value", meta, []));
        emplace_protocol_object(dict)(obj);
        return obj.name;
    };
