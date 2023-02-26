import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createIsClone_ArrayHierarchical = _test_isClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createIsClone<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
