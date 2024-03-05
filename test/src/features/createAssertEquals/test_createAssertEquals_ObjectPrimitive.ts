import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssertEquals_ObjectPrimitive = _test_assertEquals(
  TypeGuardError,
)("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
  typia.createAssertEquals<ObjectPrimitive>(),
);
