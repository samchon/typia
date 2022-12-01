import { IMetadataTag } from "../../../metadata/IMetadataTag";
import { Metadata } from "../../../metadata/Metadata";
import { MetadataObject } from "../../../metadata/MetadataObject";
import { MetadataProperty } from "../../../metadata/MetadataProperty";

export namespace ProtocolMetadataUtil {
    export function size(meta: Metadata): number {
        return (
            meta.atomics.length +
            meta.constants.filter(
                (c) =>
                    meta.atomics.find((type) => c.type === type) === undefined,
            ).length +
            (meta.templates.length !== 0 &&
            meta.atomics.find((type) => type === "string") === undefined &&
            meta.constants.find((c) => c.type === "string") === undefined
                ? 1
                : 0) +
            meta.tuples.length +
            meta.arrays.length +
            meta.sets.length +
            meta.maps.length +
            meta.objects.length +
            meta.natives.filter((n) => n === "Date").length +
            (meta.natives.filter((n) => n !== "Date").length ? 1 : 0)
        );
    }

    export function object(name: string, index: number): MetadataObject {
        return MetadataObject.create({
            name,
            index,
            properties: [],
            description: undefined,
            jsDocTags: [],
            validated: false,
            recursive: false,
            nullables: [false],
        });
    }

    export function property(
        key: string,
        value: Metadata,
        tags: IMetadataTag[],
    ): MetadataProperty {
        return MetadataProperty.create({
            key: (() => {
                const meta: Metadata = Metadata.initialize();
                meta.constants.push({
                    type: "string",
                    values: [key],
                });
                return meta;
            })(),
            value: value,
            description: undefined,
            tags,
            jsDocTags: [],
        });
    }
}
