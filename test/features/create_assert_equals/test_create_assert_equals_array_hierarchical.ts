import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_array_hierarchical = _test_assert_equals(
    "hierarchical array",
    ArrayHierarchical.generate,
    TSON.createAssertEquals<ArrayHierarchical>(),
);
