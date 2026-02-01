import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_createValidatePrune_ArrayHierarchicalPointer = (): void => _test_misc_validatePrune(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)(typia.misc.createValidatePrune<ArrayHierarchicalPointer>());
