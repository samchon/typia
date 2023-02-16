import typia from "typia";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ArrayHierarchical = _test_assertParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createAssertParse<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
