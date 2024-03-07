import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassMethod } from "../../structures/ClassMethod";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ClassMethod = _test_assertGuard(
  CustomGuardError,
)("ClassMethod")<ClassMethod>(ClassMethod)((input) =>
  typia.assertGuard<ClassMethod>(input, (p) => new CustomGuardError(p)),
);
