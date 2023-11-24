import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_createAssertClone_ArrayRecursive =
  _test_misc_assertClone("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
    typia.misc.createAssertClone<ArrayRecursive>(),
  );
