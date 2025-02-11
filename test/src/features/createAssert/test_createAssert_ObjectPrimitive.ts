import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssert_ObjectPrimitive = _test_assert(TypeGuardError)(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)(typia.createAssert<ObjectPrimitive>());
