import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_array_hierarchical = _test_assert_clone(
    "hierarchical array",
    ArrayHierarchical.generate,
    TSON.createAssertClone<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
