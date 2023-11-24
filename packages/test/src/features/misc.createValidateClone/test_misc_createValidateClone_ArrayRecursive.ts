import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_createValidateClone_ArrayRecursive =
  _test_misc_validateClone("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
    typia.misc.createValidateClone<ArrayRecursive>(),
  );
