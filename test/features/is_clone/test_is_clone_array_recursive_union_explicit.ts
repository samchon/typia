import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_array_recursive_union_explicit =
    _test_is_clone(
        "recursive union array",
        ArrayRecursiveUnionExplicit.generate,
        (input) => TSON.isClone(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
