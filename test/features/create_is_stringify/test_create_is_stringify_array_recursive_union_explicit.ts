import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_array_recursive_union_explicit =
    _test_is_stringify(
        "recursive union array",
        ArrayRecursiveUnionExplicit.generate,
        TSON.createIsStringify<ArrayRecursiveUnionExplicit>(),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
