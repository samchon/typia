import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_array_recursive_union_explicit =
    _test_assert_type(
        "explicit recursive union array",
        ArrayRecursiveUnionExplicit.generate,
        (input) => TSON.assertType(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
