import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validate } from "./_test_validate";

export const test_validate_array_recursive_union_implicit = _test_validate(
    "implicit recursive union array",
    ArrayRecursiveUnionImplicit.generate,
    (input) => TSON.validate(input),
    // [
    //     //----
    //     // SEQUENCE OF GENERATED BUCKETS
    //     //----
    //     // 0. IMAGE
    //     // 1. TEXT
    //     // 2. ZIP
    //     // 3~5. SHORTCUTS
    //     // 6. DIRECTORY
    //     // 7. SHORTCUT OF DIRECTORY
    //     // @todo
    //     // //----
    //     // // ERASE KEY PROPERTIES
    //     // //----
    //     // (input) => delete (input[0] as any).url && true,
    //     // (input) => delete (input[1] as any).content && true,
    //     // (input) => delete (input[2] as any).count && true,
    //     // (input) => delete (input[3] as any).target && true,
    //     // (input) => delete (input[4] as any).path && true,
    //     // (input) => delete (input[5] as any).id && true,
    //     // (input) => delete (input[6] as any).children && true,
    //     // //----
    //     // // WRONG PROPERTIES
    //     // //----
    //     // (input) => (input[0].id = "uuid" as any as number) && true,
    //     // (input) => (input[1].name = 3 as any as string) && true,
    //     // (input) => (input[2].path = {} as any as string) && true,
    //     // (input) =>
    //     //     ((input[3] as ArrayRecursiveUnionImplicit.IShortcut).target =
    //     //         [] as any as ArrayRecursiveUnionImplicit.IBucket) && true,
    //     // (input) =>
    //     //     ((input[4] as ArrayRecursiveUnionImplicit.IShortcut).name =
    //     //         null as any as "string") && true,
    //     // (input) => (input[5].path = [] as any as "directory"),
    //     // (input) =>
    //     //     ((
    //     //         input[6] as ArrayRecursiveUnionImplicit.IDirectory
    //     //     ).children[0].path = [] as any as string) && true,
    // ],
);
