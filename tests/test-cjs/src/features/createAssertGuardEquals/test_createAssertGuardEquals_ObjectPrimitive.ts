import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssertGuardEquals_ObjectPrimitive = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )(typia.createAssertGuardEquals<ObjectPrimitive>());
