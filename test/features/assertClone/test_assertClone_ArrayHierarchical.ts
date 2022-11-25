import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ArrayHierarchical = _test_assertClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => TSON.assertClone(input),
    ArrayHierarchical.SPOILERS,
);