import { IMetadataCommentTag } from "../../schemas/metadata/IMetadataCommentTag";
import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { ProtobufAtomic } from "../../typings/ProtobufAtomic";

export namespace ProtobufUtil {
    export const isStaticObject = (obj: MetadataObject): boolean =>
        obj.properties.length >= 1 &&
        obj.properties.every((p) => p.key.isSoleLiteral());

    export const getAtomics =
        (meta: Metadata) =>
        (commentTags: IMetadataCommentTag[]): ProtobufAtomic[] => {
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
                    decode_bigint(commentTags)(atomic.tags).forEach((t) =>
                        set.add(t),
                    );
                else if (atomic.type === "number")
                    decode_number(commentTags)(atomic.tags).forEach((t) =>
                        set.add(t),
                    );
                else if (atomic.type === "string") set.add("string");

            return [...set].sort((x, y) => {
                const i: number = ATOMIC_ORDER.get(x)!;
                const j: number = ATOMIC_ORDER.get(y)!;
                return i - j;
            });
        };
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

const decode_bigint =
    (commentTags: IMetadataCommentTag[]) =>
    (typeTags: IMetadataTypeTag[][]): ProtobufAtomic.BigNumeric[] => {
        const comment: IMetadataCommentTag | undefined = commentTags.find(
            (t) => t.kind === "type" && t.value === "uint64",
        );
        if (comment !== undefined) return ["uint64"];

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

const decode_number =
    (commentTags: IMetadataCommentTag[]) =>
    (typeTags: IMetadataTypeTag[][]): ProtobufAtomic.Numeric[] => {
        const comment: IMetadataCommentTag.INumberType | undefined =
            commentTags.find((t) => t.kind === "type") as
                | IMetadataCommentTag.INumberType
                | undefined;
        if (comment !== undefined)
            return [
                comment.value === "int"
                    ? "int32"
                    : comment.value === "uint"
                    ? "uint32"
                    : comment.value,
            ];

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
