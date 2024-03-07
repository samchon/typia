import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectRecursive = _test_assert(TypeGuardError)(
  "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)(typia.createAssert<ObjectRecursive>());
