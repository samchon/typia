import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_prune_ArrayHierarchical = (): void => _test_misc_prune(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)((input) => typia.misc.prune<ArrayHierarchical>(input));
