import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_createPrune_ArrayRecursiveUnionExplicit = (): void => _test_misc_prune(
    "ArrayRecursiveUnionExplicit",
)<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit
)(typia.misc.createPrune<ArrayRecursiveUnionExplicit>());
