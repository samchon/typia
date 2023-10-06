import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_createPrune_ArrayHierarchical = _test_misc_prune(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.misc.createPrune<ArrayHierarchical>());
