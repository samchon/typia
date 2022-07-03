import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_is } from "./_test_is";

export const test_is_array_recursive_union_implicit = _test_is(
    "implicit recursive union array",
    ArrayRecursiveUnionImplicit.generate,
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
        // ERASE KEY PROPERTIES
        //----
        (input) => delete (input[0] as any).url,
        (input) => delete (input[1] as any).content,
        (input) => delete (input[2] as any).count,
        (input) => delete (input[3] as any).target,
        (input) => delete (input[4] as any).path,
        (input) => delete (input[5] as any).id,
        (input) => delete (input[6] as any).children,

        //----
        // WRONG PROPERTIES
        //----
        (input) => (input[0].id = "uuid" as any as number),
        (input) => (input[1].name = 3 as any as string),
        (input) => (input[2].path = {} as any as string),
        (input) =>
            ((input[3] as ArrayRecursiveUnionImplicit.IShortcut).target =
                [] as any as ArrayRecursiveUnionImplicit.IBucket),
        (input) =>
            ((input[4] as ArrayRecursiveUnionImplicit.IShortcut).name =
                null as any as "string"),
        (input) => (input[5].path = [] as any as "directory"),
        (input) =>
            ((
                input[6] as ArrayRecursiveUnionImplicit.IDirectory
            ).children[0].path = [] as any as string),
    ],
);
