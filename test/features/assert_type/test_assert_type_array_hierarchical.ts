import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_array_hierarchical = _test_assert_type(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.assertType(input),
    ArrayHierarchical.SPOILERS,
);
