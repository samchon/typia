import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_array_hierarchical = _test_is_clone(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.isClone(input),
    ArrayHierarchical.SPOILERS,
);
