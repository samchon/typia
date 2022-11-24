import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_is } from "../internal/_test_is";

export const test_create_is_array_hierarchical = _test_is(
    "hierarchical array",
    ArrayHierarchical.generate,
    TSON.createIs<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
