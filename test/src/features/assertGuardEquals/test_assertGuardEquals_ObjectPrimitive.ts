import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_assertGuardEquals_ObjectPrimitive = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )((input) => typia.assertGuardEquals<ObjectPrimitive>(input));
