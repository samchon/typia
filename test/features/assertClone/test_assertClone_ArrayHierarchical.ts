import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_assertClone_ArrayHierarchical = _test_assertClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.assertClone(input),
    ArrayHierarchical.SPOILERS,
);
