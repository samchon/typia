import { IMetadataTag } from "../../../schemas/metadata/IMetadataTag";
import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataArray } from "../../../schemas/metadata/MetadataArray";
import { MetadataObject } from "../../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../../schemas/metadata/MetadataProperty";

import { Atomic } from "../../../typings/Atomic";

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

    export function standalone(meta: Metadata): boolean {
        return (
            size(meta) === 1 &&
            meta.required === true &&
            meta.nullable === false &&
            meta.tuples.length === 0 &&
            meta.arrays.length === 0 &&
            meta.sets.length === 0 &&
            meta.maps.length === 0 &&
            meta.objects.every((obj) =>
                obj.properties.every((p) => p.key.isSoleLiteral()),
            )
        );
    }

    export function regular(obj: MetadataObject): boolean {
        return obj.properties.every((p) => p.key.isSoleLiteral());
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
            description: null,
            tags,
            jsDocTags: [],
        });
    }

    export function array(meta: Metadata): Metadata {
        return Metadata.create({
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            resolved: null,
            aliases: [],
            atomics: [],
            constants: [],
            templates: [],
            rest: null,
            arrays: [
                MetadataArray.create({
                    name: meta.getName(),
                    value: meta,
                    nullables: [false],
                    recursive: false,
                    index: null,
                }),
            ],
            tuples: [],
            objects: [],
            natives: [],
            sets: [],
            maps: [],
        });
    }

    export function atomic(type: Atomic.Literal): Metadata {
        return Metadata.create({
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            resolved: null,
            aliases: [],
            atomics: [type],
            constants: [],
            templates: [],
            rest: null,
            arrays: [],
            tuples: [],
            objects: [],
            natives: [],
            sets: [],
            maps: [],
        });
    }

    export function reference(obj: MetadataObject): Metadata {
        return Metadata.create({
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            resolved: null,
            aliases: [],
            atomics: [],
            constants: [],
            templates: [],
            rest: null,
            arrays: [],
            tuples: [],
            objects: [obj],
            natives: [],
            sets: [],
            maps: [],
        });
    }

    export function map(elem: Metadata.Entry): Metadata {
        return Metadata.create({
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            resolved: null,
            aliases: [],
            atomics: [],
            constants: [],
            templates: [],
            rest: null,
            arrays: [],
            tuples: [],
            objects: [],
            natives: [],
            sets: [],
            maps: [elem],
        });
    }
}
