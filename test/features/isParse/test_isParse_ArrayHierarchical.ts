import typia from "typia";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ArrayHierarchical = _test_isParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.isParse<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
