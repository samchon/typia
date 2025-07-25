import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_assertGuardEquals_ObjectHttpAtomic = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )((input) => typia.assertGuardEquals<ObjectHttpAtomic>(input));
