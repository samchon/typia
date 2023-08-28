import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { ProtobufAtomic } from "../../typings/ProtobufAtomic";

export namespace ProtobufUtil {
    export const isStaticObject = (obj: MetadataObject): boolean =>
        obj.properties.length >= 1 &&
        obj.properties.every((p) => p.key.isSoleLiteral());

    export const size = (meta: Metadata): number =>
        getAtomics(meta).length +
        meta.arrays.length +
        meta.tuples.length +
        meta.natives.length +
        meta.objects.length +
        meta.maps.length;

    export const isUnion = (meta: Metadata): boolean => size(meta) > 1;

    export const getAtomics = (meta: Metadata): ProtobufAtomic[] => {
        const set: Set<ProtobufAtomic> = new Set();
        if (meta.templates.length) set.add("string");
        for (const c of meta.constants)
            if (c.type === "boolean") set.add("bool");
            else if (c.type === "bigint") set.add("uint64");
            else if (c.type === "number")
                set.add(deduce_numeric_type(c.values));
            else if (c.type === "string") set.add("string");
        for (const atomic of meta.atomics)
            if (atomic.type === "boolean") set.add("bool");
            else if (atomic.type === "bigint")
                decode_bigint(atomic.tags).forEach((t) => set.add(t));
            else if (atomic.type === "number")
                decode_number(atomic.tags).forEach((t) => set.add(t));
            else if (atomic.type === "string") set.add("string");

        return [...set].sort(compare);
    };

    export const getNumbers = (meta: Metadata) => {
        const set: Set<ProtobufAtomic.Numeric> = new Set();
        for (const c of meta.constants)
            if (c.type === "number") set.add(deduce_numeric_type(c.values));
        for (const atomic of meta.atomics)
            if (atomic.type === "number")
                decode_number(atomic.tags).forEach((t) => set.add(t));
        return [...set].sort(compare);
    };

    export const getBigints = (meta: Metadata) => {
        const set: Set<ProtobufAtomic.BigNumeric> = new Set();
        for (const c of meta.constants)
            if (c.type === "bigint") set.add("uint64");
        for (const atomic of meta.atomics)
            if (atomic.type === "bigint")
                decode_bigint(atomic.tags).forEach((t) => set.add(t));
        return [...set].sort(compare);
    };

    const compare = (x: ProtobufAtomic, y: ProtobufAtomic): number =>
        ATOMIC_ORDER.get(x)! - ATOMIC_ORDER.get(y)!;
}

const ATOMIC_ORDER = new Map<ProtobufAtomic, number>(
    (
        [
            "bool",
            "int32",
            "uint32",
            "int64",
            "uint64",
            "float",
            "double",
            "string",
        ] as const
    ).map((str, i) => [str, i]),
);

const deduce_numeric_type = (values: number[]): ProtobufAtomic.Numeric =>
    values.every((v) => Math.floor(v) === v)
        ? values.every((v) => -2147483648 <= v && v <= 2147483647)
            ? "int32"
            : "int64"
        : "double";

const decode_bigint = (
    typeTags: IMetadataTypeTag[][],
): ProtobufAtomic.BigNumeric[] => {
    if (typeTags.length === 0) return ["int64"];

    const types: Set<ProtobufAtomic.BigNumeric> = new Set();
    for (const row of typeTags) {
        const value: ProtobufAtomic.BigNumeric | undefined = row.find(
            (tag) =>
                tag.kind === "type" &&
                (tag.value === "int64" || tag.value === "uint64"),
        )?.value;
        types.add(value ?? "int64");
    }
    return [...types];
};

const decode_number = (
    typeTags: IMetadataTypeTag[][],
): ProtobufAtomic.Numeric[] => {
    if (typeTags.length === 0) return ["double"];

    const types: Set<ProtobufAtomic.Numeric> = new Set();
    for (const row of typeTags) {
        const value: ProtobufAtomic.Numeric | undefined = row.find(
            (tag) =>
                tag.kind === "type" &&
                (tag.value === "int32" ||
                    tag.value === "uint32" ||
                    tag.value === "int64" ||
                    tag.value === "uint64" ||
                    tag.value === "float" ||
                    tag.value === "double"),
        )?.value;
        types.add(value ?? "double");
    }
    return [...types];
};
