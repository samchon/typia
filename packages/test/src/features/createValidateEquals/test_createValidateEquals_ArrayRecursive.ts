import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createValidateEquals_ArrayRecursive = _test_validateEquals(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)(typia.createValidateEquals<ArrayRecursive>());
