import typia from "typia";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ArrayHierarchical = _test_clone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.clone(input),
);
