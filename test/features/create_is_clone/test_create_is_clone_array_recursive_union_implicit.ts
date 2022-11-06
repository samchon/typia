import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_array_recursive_union_implicit =
    _test_is_clone(
        "implicit recursive union array",
        ArrayRecursiveUnionImplicit.generate,
        TSON.createIsClone<ArrayRecursiveUnionImplicit>(),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
