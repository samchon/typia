import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassGetter } from "../../structures/ClassGetter";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ClassGetter = _test_assertGuardEquals(
  TypeGuardError,
)("ClassGetter")<ClassGetter>(ClassGetter)(
  typia.createAssertGuardEquals<ClassGetter>(),
);
