import { IMetadataTag } from "../../../metadata/IMetadataTag";
import { Metadata } from "../../../metadata/Metadata";
import { MetadataObject } from "../../../metadata/MetadataObject";

import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { ProtocolMetadataUtil } from "./ProtocolMetadataUtil";
import { emplace_protocol_object } from "./emplace_protocol_object";

export const iterate_protocol_repeated =
    (container: "Array" | "Set") =>
    (sole: boolean) =>
    (dict: Map<string, IProtocolMessage>) =>
    (meta: Metadata) =>
    (tags: IMetadataTag[]): string => {
        sole &&= ProtocolMetadataUtil.standalone(meta);
        if (sole === true) return meta.getName();

        const obj: MetadataObject = ProtocolMetadataUtil.object(
            `${container}.Element<${meta.getName()}>`,
            dict.size,
        );
        obj.properties.push(ProtocolMetadataUtil.property("value", meta, tags));
        emplace_protocol_object(dict)(obj);
        return obj.name;
    };
