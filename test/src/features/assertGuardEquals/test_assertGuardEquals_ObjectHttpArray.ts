import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_assertGuardEquals_ObjectHttpArray = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )((input) => typia.assertGuardEquals<ObjectHttpArray>(input));
