import typia from "../../../src";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ArrayHierarchical = _test_assertStringify(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.assertStringify(input),
    ArrayHierarchical.SPOILERS,
);
