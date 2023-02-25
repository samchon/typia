import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ArrayHierarchical = _test_validatePrune(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.validatePrune(input),
    ArrayHierarchical.SPOILERS,
);
