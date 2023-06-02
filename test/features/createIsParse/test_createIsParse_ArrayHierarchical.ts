import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createIsParse_ArrayHierarchical = _test_isParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createIsParse<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
