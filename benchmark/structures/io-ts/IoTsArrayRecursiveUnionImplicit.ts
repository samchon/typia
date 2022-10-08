import * as t from "io-ts";

import { ArrayRecursiveUnionImplicit } from "../../../test/structures/ArrayRecursiveUnionImplicit";

const ImageFile = t.type({
    id: t.number,
    name: t.string,
    path: t.string,
    width: t.number,
    height: t.number,
    url: t.string,
    size: t.number,
});

const TextFile = t.type({
    id: t.number,
    name: t.string,
    path: t.string,
    size: t.number,
    content: t.string,
});

const ZipFile = t.type({
    id: t.number,
    name: t.string,
    path: t.string,
    size: t.number,
    count: t.number,
});

const Shortcut: t.Type<ArrayRecursiveUnionImplicit.IShortcut> = t.recursion(
    "Shortcut",
    () =>
        t.type({
            id: t.number,
            name: t.string,
            path: t.string,
            target: Bucket,
        }),
);

const Directory: t.Type<ArrayRecursiveUnionImplicit.IDirectory> = t.recursion(
    "Directory",
    () =>
        t.type({
            id: t.number,
            name: t.string,
            path: t.string,
            children: t.array(Bucket),
        }),
);

const Bucket: t.Type<ArrayRecursiveUnionImplicit.IBucket> = t.recursion(
    "Bucket",
    () => t.union([ImageFile, TextFile, ZipFile, Shortcut, Directory]),
);

export const IoTsArrayRecursiveUnionImplicit: t.Type<ArrayRecursiveUnionImplicit> =
    t.recursion("IoTsArrayRecursiveUnionImplicit", () => t.array(Bucket));
