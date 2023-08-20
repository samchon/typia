import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_assertPrune_ArrayHierarchical = _test_assertPrune(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.assertPrune<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
