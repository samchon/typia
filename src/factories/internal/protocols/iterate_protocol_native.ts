import { Metadata } from "../../../metadata/Metadata";

import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { ProtocolMetadataUtil } from "./ProtocolMetadataUtil";
import { emplace_protocol_object } from "./emplace_protocol_object";

export const iterate_protocol_native =
    (dict: Map<string, IProtocolMessage>) => (native: string) => {
        if (native === "Date") {
            const obj = ProtocolMetadataUtil.object("__Timestamp", dict.size);
            obj.properties.push(
                ProtocolMetadataUtil.property("seconds", integer("bigint"), [
                    {
                        kind: "type",
                        value: "int64",
                    },
                ]),
                ProtocolMetadataUtil.property("nanos", integer("number"), [
                    {
                        kind: "type",
                        value: "int",
                    },
                ]),
            );
            emplace_protocol_object(dict)(obj);
            return "__Timestamp";
        } else return "bytes";
    };

const integer = (type: "number" | "bigint") => {
    const meta = Metadata.initialize();
    meta.atomics.push(type);
    return meta;
};
