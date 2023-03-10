import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createAssertParse_ArrayHierarchical = _test_assertParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createAssertParse<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
