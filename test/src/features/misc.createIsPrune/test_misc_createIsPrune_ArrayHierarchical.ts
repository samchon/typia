import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_createIsPrune_ArrayHierarchical = (): void => _test_misc_isPrune(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.misc.createIsPrune<ArrayHierarchical>());
