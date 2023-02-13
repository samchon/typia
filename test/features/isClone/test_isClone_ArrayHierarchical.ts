import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ArrayHierarchical = _test_isClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.isClone(input),
    ArrayHierarchical.SPOILERS,
);