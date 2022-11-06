import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_array_recursive_union_explicit =
    _test_assert_clone(
        "recursive union array",
        ArrayRecursiveUnionExplicit.generate,
        (input) => TSON.assertClone(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
