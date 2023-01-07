import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ArrayHierarchical = _test_assertStringify(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createAssertStringify<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);