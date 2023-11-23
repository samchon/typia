import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_createClone_ArrayRecursiveUnionExplicit =
  _test_misc_clone("ArrayRecursiveUnionExplicit")<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit,
  )(typia.misc.createClone<ArrayRecursiveUnionExplicit>());
