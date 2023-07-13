import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_clone_ArrayHierarchical = _test_misc_clone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.misc.clone(input),
);
