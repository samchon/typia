import { MetadataProperty } from "../../../schemas/metadata/MetadataProperty";
import { IProtocolMessage } from "../../../schemas/protobuf/IProtocolMessage";
import { IProtocolProperty } from "../../../schemas/protobuf/IProtocolProperty";

import { iterate_protocol_metadata } from "./iterate_protocol_metadata";

export const emplace_protocol_property =
    (dict: Map<string, IProtocolMessage>) =>
    (property: MetadataProperty): IProtocolProperty => ({
        key: property.key.getSoleLiteral()!,
        ...iterate_protocol_metadata(dict)(property.value)(property.tags),
    });
