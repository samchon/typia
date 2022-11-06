import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_clone } from "./_test_clone";

export const test_clone_array_hierarchical = _test_clone(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.clone(input),
);
