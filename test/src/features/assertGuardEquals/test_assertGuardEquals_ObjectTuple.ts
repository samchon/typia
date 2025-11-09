import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_assertGuardEquals_ObjectTuple = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ObjectTuple")<ObjectTuple>(
    ObjectTuple,
  )((input) => typia.assertGuardEquals<ObjectTuple>(input));
