import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validate } from "./_test_validate";

export const test_validate_array_recursive_union_implicit = _test_validate(
    "implicit recursive union array",
    ArrayRecursiveUnionImplicit.generate,
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
        // ERASE KEY PROPERTIES
        //----
        (input) => {
            (input[0] as any).url = undefined;
            return ["$input[0].url"];
        },
        (input) => {
            (input[1] as any).content = undefined;
            return ["$input[1]"];
        },
        (input) => {
            (input[2] as any).count = undefined;
            return ["$input[2]"];
        },
        (input) => {
            (input[3] as any).target = undefined;
            return ["$input[3]"];
        },
        (input) => {
            (input[4] as any).path = undefined;
            return ["$input[4].path"];
        },
        (input) => {
            (input[5] as any).id = undefined;
            return ["$input[5].id"];
        },
        (input) => {
            (input[6] as any).children = undefined;
            return ["$input[6]"];
        },
        //----
        // WRONG PROPERTIES
        //----
        (input) => {
            input[0].id = "uuid" as any;
            return ["$input[0].id"];
        },
        (input) => {
            input[1].name = 3 as any;
            return ["$input[1].name"];
        },
        (input) => {
            input[2].path = {} as any;
            return ["$input[2].path"];
        },
        (input) => {
            (input[3] as ArrayRecursiveUnionImplicit.IShortcut).target =
                [] as any;
            return ["$input[3].target"];
        },
        (input) => {
            (input[4] as ArrayRecursiveUnionImplicit.IShortcut).name =
                null as any;
            return ["$input[4].name"];
        },
        (input) => {
            input[5].path = [] as any;
            return ["$input[5].path"];
        },
        (input) => {
            (
                input[6] as ArrayRecursiveUnionImplicit.IDirectory
            ).children[0].path = [] as any;
            return ["$input[6].children[0].path"];
        },
    ],
);
