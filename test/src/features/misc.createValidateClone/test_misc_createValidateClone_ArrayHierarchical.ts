import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_createValidateClone_ArrayHierarchical = (): void => _test_misc_validateClone(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.misc.createValidateClone<ArrayHierarchical>());
