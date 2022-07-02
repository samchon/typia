import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_is } from "./_test_is";

export const test_is_array_recursive_union_explicit = _test_is(
    "explicit recursive union array",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.is(input),
    [
        //----
        // SEQUENCE OF GENERATED BUCKETS
        //----
        // 0. IMAGE
        // 1. TEXT
        // 2. ZIP
        // 3~5. SHORTCUTS
        // 6. DIRECTORY
        // 7. SHORTCUT OF DIRECTORY

        //----
        // WRONG TYPES
        //----
        (input) => (input[0].type = "directory"),
        (input) => (input[1].type = "shortcut"),
        (input) => (input[2].type = "text" as "file"),
        (input) => (input[3].type = "directory"),
        (input) => (input[4].type = "text" as "file"),
        (input) => (input[5].type = "file"),
        (input) => (input[6].type = "file"),

        //----
        // WRONG EXTENSIONS
        //---
        (input) =>
            ((input[0] as ArrayRecursiveUnionExplicit.IFile).extension = "txt"),
        (input) =>
            ((input[1] as ArrayRecursiveUnionExplicit.IFile).extension = "zip"),
        (input) =>
            ((input[2] as ArrayRecursiveUnionExplicit.IFile).extension = "jpg"),
        (input) =>
            ((input[3] as ArrayRecursiveUnionExplicit.IFile).extension = "txt"),
        (input) =>
            ((input[4] as ArrayRecursiveUnionExplicit.IFile).extension = "zip"),
        (input) =>
            ((input[5] as ArrayRecursiveUnionExplicit.IFile).extension = "jpg"),

        //----
        // WRONG PROPERTIES
        //----
        (input) => (input[0].id = "uuid" as any as number),
        (input) => (input[1].name = 3 as any as string),
        (input) => (input[2].path = {} as any as string),
        (input) =>
            ((input[3] as ArrayRecursiveUnionExplicit.IShortcut).target =
                [] as any as ArrayRecursiveUnionExplicit.IBucket),
        (input) =>
            ((input[4] as ArrayRecursiveUnionExplicit.IShortcut).extension =
                null as any as "lnk"),
        (input) => (input[5].type = [] as any as "directory"),
        (input) =>
            ((
                input[6] as ArrayRecursiveUnionExplicit.IDirectory
            ).children[0].path = [] as any as string),
    ],
);
