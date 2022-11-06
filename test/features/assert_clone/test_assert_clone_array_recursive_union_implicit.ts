import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_array_recursive_union_implicit =
    _test_assert_clone(
        "implicit recursive union array",
        ArrayRecursiveUnionImplicit.generate,
        (input) => TSON.assertClone(input),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
