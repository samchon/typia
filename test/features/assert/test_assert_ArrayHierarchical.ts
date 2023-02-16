import typia from "typia";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ArrayHierarchical = _test_assert(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.assert(input),
    ArrayHierarchical.SPOILERS,
);
