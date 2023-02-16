import typia from "typia";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ArrayHierarchical = _test_validatePrune(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createValidatePrune<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
