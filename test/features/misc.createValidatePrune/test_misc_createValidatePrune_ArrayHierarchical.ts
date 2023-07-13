import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_validatePrune_ArrayHierarchical =
    _test_misc_validatePrune(
        "ArrayHierarchical",
        ArrayHierarchical.generate,
        typia.misc.createValidatePrune<ArrayHierarchical>(),
        ArrayHierarchical.SPOILERS,
    );
