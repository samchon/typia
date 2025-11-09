import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_isPrune_ArrayHierarchicalPointer = (): void => _test_misc_isPrune(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)((input) => typia.misc.isPrune<ArrayHierarchicalPointer>(input));
