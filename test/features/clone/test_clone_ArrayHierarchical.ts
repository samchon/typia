import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_clone_ArrayHierarchical = _test_clone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.clone(input),
);
