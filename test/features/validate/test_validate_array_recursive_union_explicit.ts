import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_validate } from "./_test_validate";

export const test_validate_array_recursive_union_explicit = _test_validate(
    "explicit recursive union array",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.validate(input),
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
        (input) => {
            // image
            input[0].type = "directory";
            return ["$input[0].children"];
        },
        (input) => {
            // text
            input[1].type = "shortcut";
            return ["$input[1].type"];
        },
        (input) => {
            // zip
            input[2].type = "text" as "file";
            return ["$input[2].type"];
        },
        (input) => {
            // shortcut
            input[3].type = "directory";
            return ["$input[3].children"];
        },
        (input) => {
            // shortcut
            input[4].type = "text" as "file";
            return ["$input[4]"];
        },
        (input) => {
            // shortcut
            input[5].type = "file";
            return ["$input[5]"];
        },
        (input) => {
            // directory
            input[6].type = "file";
            return ["$input[6]"];
        },

        //----
        // WRONG EXTENSIONS
        //---
        (input) => {
            // image
            (input[0] as ArrayRecursiveUnionExplicit.IFile).extension = "txt";
            return ["$input[0].content"];
        },
        (input) => {
            // text
            (input[1] as ArrayRecursiveUnionExplicit.IFile).extension = "zip";
            return ["$input[1].count"];
        },
        (input) => {
            // zip
            (input[2] as ArrayRecursiveUnionExplicit.IFile).extension = "jpg";
            return ["$input[2].width", "$input[2].height", "$input[2].url"];
        },
        (input) => {
            // shortcut
            (input[3] as ArrayRecursiveUnionExplicit.IFile).extension = "txt";
            return ["$input[3].type", "$input[3].content", "$input[3].size"];
        },
        (input) => {
            // shortcut
            (input[4] as ArrayRecursiveUnionExplicit.IFile).extension = "zip";
            return ["$input[4].type", "$input[4].size", "$input[4].count"];
        },
        (input) => {
            (input[5] as ArrayRecursiveUnionExplicit.IFile).extension = "jpg";
            return [
                "$input[5].type",
                "$input[5].width",
                "$input[5].height",
                "$input[5].url",
                "$input[5].size",
            ];
        },

        //----
        // WRONG PROPERTIES
        //----
        (input) => {
            input[0].id = "uuid" as any;
            return ["$input[0].id"];
        },
        (input) => {
            input[1].name = 3 as any as string;
            return ["$input[1].name"];
        },
        (input) => {
            input[2].path = {} as any as string;
            return ["$input[2].path"];
        },
        (input) => {
            (input[3] as ArrayRecursiveUnionExplicit.IShortcut).target =
                [] as any as ArrayRecursiveUnionExplicit.IBucket;
            return ["$input[3].target"];
        },
        (input) => {
            (input[4] as ArrayRecursiveUnionExplicit.IShortcut).extension =
                null as any as "lnk";
            return ["$input[4].extension"];
        },
        (input) => {
            input[5].type = [] as any;
            return ["$input[5]"];
        },
        (input) => {
            (
                input[6] as ArrayRecursiveUnionExplicit.IDirectory
            ).children[0].path = [] as any as string;
            return ["$input[6].children[0].path"];
        },
    ],
);
