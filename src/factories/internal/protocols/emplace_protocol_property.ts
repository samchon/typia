import { MetadataProperty } from "../../../metadata/MetadataProperty";

import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { IProtocolProperty } from "../../../messages/IProtocolProperty";
import { iterate_protocol_metadata } from "./iterate_protocol_metadata";

export const emplace_protocol_property =
    (dict: Map<string, IProtocolMessage>) =>
    (property: MetadataProperty): IProtocolProperty => ({
        key: property.key.getSoleLiteral()!,
        ...iterate_protocol_metadata(dict)(property.value)(property.tags),
    });
