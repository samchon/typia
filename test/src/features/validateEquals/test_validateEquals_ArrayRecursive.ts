import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_validateEquals_ArrayRecursive = _test_validateEquals(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)((input) =>
  typia.validateEquals<ArrayRecursive>(input),
);
