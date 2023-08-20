import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_validateClone_ArrayHierarchical = _test_validateClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.validateClone<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
