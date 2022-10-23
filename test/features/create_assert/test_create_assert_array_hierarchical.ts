import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_array_hierarchical = _test_assert(
    "hierarchical array",
    ArrayHierarchical.generate,
    TSON.createAssertType<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
