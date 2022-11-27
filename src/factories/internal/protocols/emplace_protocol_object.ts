import { MetadataObject } from "../../../metadata/MetadataObject";

import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { MetadataCollection } from "../../MetadataCollection";
import { emplace_protocol_property } from "./emplace_protocol_property";

export const emplace_protocol_object =
    (collection: MetadataCollection) =>
    (messages: IProtocolMessage[]) =>
    (object: MetadataObject): IProtocolMessage => ({
        name: object.name,
        properties: object.properties
            .filter((p) => p.key.isSoleLiteral())
            .map((p) =>
                emplace_protocol_property(collection)(messages)(object)(p)(
                    false,
                ),
            ),
    });
