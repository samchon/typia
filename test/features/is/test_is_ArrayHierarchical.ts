import typia from "../../../src";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_is } from "../internal/_test_is";

export const test_is_ArrayHierarchical = _test_is(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.is(input),
    ArrayHierarchical.SPOILERS,
);
