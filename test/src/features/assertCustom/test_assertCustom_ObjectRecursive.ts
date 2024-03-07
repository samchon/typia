import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectRecursive = _test_assert(CustomGuardError)(
  "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)((input) =>
  typia.assert<ObjectRecursive>(input, (p) => new CustomGuardError(p)),
);
