import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createAssertGuardEqualsCustom_ClassMethod = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )(typia.createAssertGuardEquals<ClassMethod>((p) => new CustomGuardError(p)));
