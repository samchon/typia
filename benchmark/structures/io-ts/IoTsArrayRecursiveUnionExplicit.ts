import * as t from "io-ts";

import { ArrayRecursiveUnionExplicit } from "../../../test/structures/ArrayRecursiveUnionExplicit";

const ImageFile = t.type({
    id: t.number,
    name: t.string,
    path: t.string,
    width: t.number,
    height: t.number,
    url: t.string,
    size: t.number,
    type: t.literal("file"),
    extension: t.literal("jpg"),
});

const TextFile = t.type({
    id: t.number,
    name: t.string,
    path: t.string,
    size: t.number,
    content: t.string,
    type: t.literal("file"),
    extension: t.literal("txt"),
});

const ZipFile = t.type({
    id: t.number,
    name: t.string,
    path: t.string,
    size: t.number,
    count: t.number,
    type: t.literal("file"),
    extension: t.literal("zip"),
});

const Shortcut: t.Type<ArrayRecursiveUnionExplicit.IShortcut> = t.recursion(
    "Shortcut",
    () =>
        t.type({
            id: t.number,
            name: t.string,
            path: t.string,
            target: Bucket,
            type: t.literal("file"),
            extension: t.literal("lnk"),
        }),
);

const Directory: t.Type<ArrayRecursiveUnionExplicit.IDirectory> = t.recursion(
    "Directory",
    () =>
        t.type({
            id: t.number,
            name: t.string,
            path: t.string,
            children: t.array(Bucket),
            type: t.literal("directory"),
        }),
);

const Bucket: t.Type<ArrayRecursiveUnionExplicit.IBucket> = t.recursion(
    "Bucket",
    () => t.union([ImageFile, TextFile, ZipFile, Shortcut, Directory]),
);

export const IoTsArrayRecursiveUnionExplicit: t.Type<ArrayRecursiveUnionExplicit> =
    t.recursion("IoTsArrayRecursiveUnionExplicit", () => t.array(Bucket));
