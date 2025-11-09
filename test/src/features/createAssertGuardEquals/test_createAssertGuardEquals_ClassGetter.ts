import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createAssertGuardEquals_ClassGetter = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ClassGetter")<ClassGetter>(
    ClassGetter,
  )(typia.createAssertGuardEquals<ClassGetter>());
