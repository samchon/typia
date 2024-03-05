import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_assert_ObjectRecursive = _test_assert(TypeGuardError)(
  "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)((input) =>
  typia.assert<ObjectRecursive>(input),
);
