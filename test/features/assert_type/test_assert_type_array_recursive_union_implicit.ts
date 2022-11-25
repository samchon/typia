import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_array_recursive_union_implicit =
    _test_assert_type(
        "implicit recursive union array",
        ArrayRecursiveUnionImplicit.generate,
        (input) => TSON.assertType(input),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
