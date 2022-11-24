import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_array_recursive_union_explicit =
    _test_is_clone(
        "recursive union array",
        ArrayRecursiveUnionExplicit.generate,
        TSON.createIsClone<ArrayRecursiveUnionExplicit>(),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
