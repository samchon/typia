import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createAssertGuardEqualsCustom_ClassGetter = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ClassGetter")<ClassGetter>(
    ClassGetter,
  )(typia.createAssertGuardEquals<ClassGetter>((p) => new CustomGuardError(p)));
