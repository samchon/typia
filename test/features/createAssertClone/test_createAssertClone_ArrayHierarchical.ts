import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createAssertClone_ArrayHierarchical = _test_assertClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createAssertClone<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
