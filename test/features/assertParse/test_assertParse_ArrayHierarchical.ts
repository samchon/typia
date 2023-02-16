import typia from "typia";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ArrayHierarchical = _test_assertParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.assertParse<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
