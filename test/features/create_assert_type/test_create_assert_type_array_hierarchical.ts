import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_array_hierarchical = _test_assert_type(
    "hierarchical array",
    ArrayHierarchical.generate,
    TSON.createAssertType<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
