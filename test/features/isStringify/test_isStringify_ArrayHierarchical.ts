import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_isStringify_ArrayHierarchical = _test_isStringify(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.isStringify<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
