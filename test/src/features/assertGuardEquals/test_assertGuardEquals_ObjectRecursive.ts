import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_assertGuardEquals_ObjectRecursive = _test_assertGuardEquals(
  "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)((input) =>
  typia.assertGuardEquals<ObjectRecursive>(input),
);
