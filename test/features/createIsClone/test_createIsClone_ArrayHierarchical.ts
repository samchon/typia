import typia from "typia";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ArrayHierarchical = _test_isClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createIsClone<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
