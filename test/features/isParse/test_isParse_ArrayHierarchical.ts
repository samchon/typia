import typia from "../../../src";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_isParse_ArrayHierarchical = _test_isParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.isParse<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
