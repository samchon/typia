import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_createClone_ArrayHierarchical = (): void => _test_misc_clone(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.misc.createClone<ArrayHierarchical>());
