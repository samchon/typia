import typia from "../../../src";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_assertPrune_ArrayHierarchical = _test_assertPrune(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.assertPrune(input),
    ArrayHierarchical.SPOILERS,
);
