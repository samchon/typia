import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_createIsClone_ArrayRecursive = _test_misc_isClone(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)(typia.misc.createIsClone<ArrayRecursive>());
