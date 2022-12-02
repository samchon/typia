import { Metadata } from "../../../metadata/Metadata";
import { MetadataObject } from "../../../metadata/MetadataObject";

import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { MetadataCollection } from "../../MetadataCollection";
import { ProtocolMetadataUtil } from "./ProtocolMetadataUtil";
import { emplace_protocol_object } from "./emplace_protocol_object";

export const iterate_protocol_tuple =
    (dict: Map<string, IProtocolMessage>) =>
    (tuple: Metadata[]): string => {
        const name: string = MetadataCollection.replace(
            `[${tuple.map((m) => m.getName()).join(", ")}]`,
        );
        if (dict.has(name)) return MetadataCollection.escape(name);

        const obj: MetadataObject = ProtocolMetadataUtil.object(
            name,
            dict.size,
        );
        obj.properties.push(
            ...tuple.map((value, i) =>
                ProtocolMetadataUtil.property(`v${i}`, value, []),
            ),
        );
        emplace_protocol_object(dict)(obj);
        return MetadataCollection.escape(obj.name);
    };
