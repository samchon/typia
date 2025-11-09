import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_prune_ArrayRecursiveUnionImplicit = (): void => _test_misc_prune(
    "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(
    ArrayRecursiveUnionImplicit
)((input) => typia.misc.prune<ArrayRecursiveUnionImplicit>(input));
