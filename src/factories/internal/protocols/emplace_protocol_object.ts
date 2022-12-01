import { MetadataObject } from "../../../metadata/MetadataObject";

import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { emplace_protocol_property } from "./emplace_protocol_property";

export const emplace_protocol_object =
    (dict: Map<string, IProtocolMessage>) => (object: MetadataObject) => {
        if (dict.has(object.name)) return;

        const regular = object.properties.filter((p) => p.key.isSoleLiteral());
        const dynamic = object.properties.filter((p) => !p.key.isSoleLiteral());

        if (regular.length && dynamic.length) return;

        const output: IProtocolMessage = {
            name: object.name,
            properties: [],
        };
        dict.set(object.name, output);

        output.properties.push(
            ...regular.map((prop) => emplace_protocol_property(dict)(prop)),
        );
        return output;
    };
