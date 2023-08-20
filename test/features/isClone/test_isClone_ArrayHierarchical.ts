import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_isClone_ArrayHierarchical = _test_isClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.isClone<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
