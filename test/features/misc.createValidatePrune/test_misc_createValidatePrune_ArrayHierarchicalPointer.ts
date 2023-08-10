import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_validatePrune_ArrayHierarchicalPointer =
    _test_misc_validatePrune<ArrayHierarchicalPointer>(
        ArrayHierarchicalPointer,
    )(typia.misc.createValidatePrune<ArrayHierarchicalPointer>());
