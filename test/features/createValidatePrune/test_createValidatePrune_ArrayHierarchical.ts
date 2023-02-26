import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createValidatePrune_ArrayHierarchical = _test_validatePrune(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createValidatePrune<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
