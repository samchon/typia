import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_createPrune_ArrayRecursiveUnionImplicit = (): void =>
  _test_misc_prune("ArrayRecursiveUnionImplicit")<ArrayRecursiveUnionImplicit>(
    ArrayRecursiveUnionImplicit,
  )(typia.misc.createPrune<ArrayRecursiveUnionImplicit>());
