import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_array_recursive_union_implicit =
    _test_is_stringify(
        "implicit recursive union array",
        ArrayRecursiveUnionImplicit.generate,
        TSON.createIsStringify<ArrayRecursiveUnionImplicit>(),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
