import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_assertGuard_ObjectHttpAtomic = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )((input) => typia.assertGuard<ObjectHttpAtomic>(input));
