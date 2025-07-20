import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_assertGuard_ObjectPartial = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )((input) => typia.assertGuard<ObjectPartial>(input));
