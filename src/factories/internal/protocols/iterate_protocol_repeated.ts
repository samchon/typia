import { IMetadataTag } from "../../../metadata/IMetadataTag";
import { Metadata } from "../../../metadata/Metadata";
import { MetadataObject } from "../../../metadata/MetadataObject";

import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { MetadataCollection } from "../../MetadataCollection";
import { ProtocolMetadataUtil } from "./ProtocolMetadataUtil";
import { emplace_protocol_object } from "./emplace_protocol_object";

export const iterate_protocol_repeated =
    (container: "Array" | "Set") =>
    (sole: boolean) =>
    (dict: Map<string, IProtocolMessage>) =>
    (meta: Metadata) =>
    (tags: IMetadataTag[]): string => {
        sole &&=
            ProtocolMetadataUtil.size(meta) === 1 &&
            meta.arrays.length === 0 &&
            meta.sets.length === 0 &&
            meta.required === true &&
            meta.nullable === false;
        if (sole === true) return MetadataCollection.replace(meta.getName());

        const obj: MetadataObject = ProtocolMetadataUtil.object(
            MetadataCollection.replace(
                `${container}.Element<${meta.getName()}>`,
            ),
            dict.size,
        );
        obj.properties.push(ProtocolMetadataUtil.property("value", meta, tags));
        emplace_protocol_object(dict)(obj);
        return obj.name;
    };
