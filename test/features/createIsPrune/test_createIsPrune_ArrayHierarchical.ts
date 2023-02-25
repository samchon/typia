import typia from "../../../src";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ArrayHierarchical = _test_isPrune(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createIsPrune<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
