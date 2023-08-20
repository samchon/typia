import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_assertStringify_ArrayHierarchical = _test_assertStringify(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.assertStringify<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
