import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_createPrune_ArrayRecursiveUnionImplicit =
  _test_misc_prune("ArrayRecursiveUnionImplicit")<ArrayRecursiveUnionImplicit>(
    ArrayRecursiveUnionImplicit,
  )(typia.misc.createPrune<ArrayRecursiveUnionImplicit>());
