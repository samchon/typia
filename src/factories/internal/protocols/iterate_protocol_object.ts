import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataObject } from "../../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../../schemas/metadata/MetadataProperty";
import { IProtocolMap } from "../../../schemas/protobuf/IProtocolMap";
import { IProtocolMessage } from "../../../schemas/protobuf/IProtocolMessage";

import { Atomic } from "../../../typings/Atomic";

import { MapUtil } from "../../../utils/MapUtil";

import { ProtocolMetadataUtil } from "./ProtocolMetadataUtil";
import { emplace_protocol_object } from "./emplace_protocol_object";
import { iterate_protocol_metadata } from "./iterate_protocol_metadata";

export const iterate_protocol_object =
    (sole: boolean) =>
    (dict: Map<string, IProtocolMessage>) =>
    (obj: MetadataObject): string | IProtocolMap => {
        // ONLY REGULAR PROPERTIES
        const statics: MetadataProperty[] = obj.properties.filter(filter(true));
        const dynamics: Metadata.Entry[] = aggregate(
            obj.properties.filter(filter(false)),
        );
        if (dynamics.length === 0) return obj.name;

        const regular: MetadataObject | undefined = statics.length
            ? (() => {
                  const r: MetadataObject = ProtocolMetadataUtil.object(
                      `${obj.name}.__Regular`,
                      dict.size,
                  );
                  r.properties.push(...statics);
                  emplace_protocol_object(dict)(r);
                  return r;
              })()
            : undefined;

        // ONLY ONE TYPED DYNAMIC PROPERTY EXISTS
        if (regular === undefined && dynamics.length === 1 && sole === true) {
            const { key, value } = dynamics[0]!;
            return {
                type: "map",
                key: key.getName(),
                value: ProtocolMetadataUtil.standalone(value)
                    ? iterate_protocol_metadata(dict)(value)([]).oneOf[0]!.type
                    : (() => {
                          const wrapper = ProtocolMetadataUtil.object(
                              `${obj.name}.__Wrapper`,
                              dict.size,
                          );
                          wrapper.properties.push(
                              ProtocolMetadataUtil.property("value", value, []),
                          );
                          emplace_protocol_object(dict)(wrapper);
                          return wrapper.name;
                      })(),
            };
        }

        // DO WRAP
        const wrapper: MetadataObject = ProtocolMetadataUtil.object(
            `${obj.name}.__Wrapper`,
            dict.size,
        );
        if (regular !== undefined)
            wrapper.properties.push(
                ProtocolMetadataUtil.property(
                    "regular",
                    ProtocolMetadataUtil.reference(regular),
                    [],
                ),
            );
        wrapper.properties.push(
            ...dynamics.map((map, i) =>
                ProtocolMetadataUtil.property(
                    `__map_${i}`,
                    ProtocolMetadataUtil.map(map),
                    [],
                ),
            ),
        );
        emplace_protocol_object(dict)(wrapper);
        return wrapper.name;
    };

const filter = (regular: boolean) => (prop: MetadataProperty) =>
    regular === prop.key.isSoleLiteral();

const aggregate = (properties: MetadataProperty[]): Metadata.Entry[] => {
    const unique: Map<Atomic.Literal, MetadataProperty[]> = new Map();
    for (const prop of properties) {
        if (prop.key.templates)
            MapUtil.take(unique)("string", () => []).push(prop);
        for (const type of prop.key.atomics)
            MapUtil.take(unique)(type, () => []).push(prop);
        for (const { type } of prop.key.constants)
            MapUtil.take(unique)(type, () => []).push(prop);
    }
    const output: Metadata.Entry[] = [];
    for (const [key, properties] of unique) {
        const value: Metadata = properties
            .map((x) => x.value)
            .reduce((x, y) => Metadata.merge(x, y));
        output.push({
            key: ProtocolMetadataUtil.atomic(key),
            value,
        });
    }
    return output;
};
