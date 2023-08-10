import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataObject } from "../../../schemas/metadata/MetadataObject";
import { IProtocolMap } from "../../../schemas/protobuf/IProtocolMap";
import { IProtocolMessage } from "../../../schemas/protobuf/IProtocolMessage";

import { ProtocolMetadataUtil } from "./ProtocolMetadataUtil";
import { emplace_protocol_object } from "./emplace_protocol_object";
import { iterate_protocol_atomic } from "./iterate_protocol_atomic";
import { iterate_protocol_constant } from "./iterate_protocol_constant";
import { iterate_protocol_metadata } from "./iterate_protocol_metadata";

export const iterate_protocol_map =
    (sole: boolean) =>
    (dict: Map<string, IProtocolMessage>) =>
    (prop: Metadata.Entry): string | IProtocolMap => {
        if (sole === true)
            return {
                type: "map",
                key: getKeyName(prop.key),
                value: getValueName(dict)(prop.value),
            };

        const obj: MetadataObject = ProtocolMetadataUtil.object(
            `Map.Wrapper<${prop.key.getName()}, ${prop.value.getName()}>`,
            dict.size,
        );
        obj.properties.push(
            ProtocolMetadataUtil.property(
                "value",
                ProtocolMetadataUtil.map(prop),
                [],
            ),
        );
        emplace_protocol_object(dict)(obj);
        return obj.name;
    };

const getKeyName = (meta: Metadata) => {
    for (const atomic of meta.atomics)
        return iterate_protocol_atomic([])(atomic);
    for (const constant of meta.constants)
        return iterate_protocol_constant(constant);
    return "string";
};

const getValueName =
    (dict: Map<string, IProtocolMessage>) => (meta: Metadata) => {
        if (ProtocolMetadataUtil.standalone(meta))
            return iterate_protocol_metadata(dict)(meta)([]).oneOf[0]!.type;

        const obj: MetadataObject = ProtocolMetadataUtil.object(
            `Map.Value<${meta.getName()}>`,
            dict.size,
        );
        obj.properties.push(ProtocolMetadataUtil.property("value", meta, []));
        emplace_protocol_object(dict)(obj);
        return obj.name;
    };
