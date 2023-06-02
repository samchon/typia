import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createAssertStringify_ArrayHierarchical =
    _test_assertStringify(
        "ArrayHierarchical",
        ArrayHierarchical.generate,
        typia.createAssertStringify<ArrayHierarchical>(),
        ArrayHierarchical.SPOILERS,
    );
