import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_validatePrune_ArrayHierarchical = _test_validatePrune(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.validatePrune<ArrayHierarchical>(input),
    ArrayHierarchical.SPOILERS,
);
