import { Metadata } from "../../../metadata/Metadata";

import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { ProtocolMetadataUtil } from "./ProtocolMetadataUtil";
import { emplace_protocol_object } from "./emplace_protocol_object";

export const iterate_protocol_main =
    (dict: Map<string, IProtocolMessage>) =>
    (meta: Metadata): string => {
        // ONLY ONE OBJECT TYPE
        if (ProtocolMetadataUtil.standalone(meta) && meta.objects.length === 1)
            return meta.getName();

        const obj = ProtocolMetadataUtil.object("__Main", dict.size);
        obj.properties.push(ProtocolMetadataUtil.property("value", meta, []));
        emplace_protocol_object(dict)(obj);

        return obj.name;
    };
