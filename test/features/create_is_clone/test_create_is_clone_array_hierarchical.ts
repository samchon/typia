import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_array_hierarchical = _test_is_clone(
    "hierarchical array",
    ArrayHierarchical.generate,
    TSON.createIsClone<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
