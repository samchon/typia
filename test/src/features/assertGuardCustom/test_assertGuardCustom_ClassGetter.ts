import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ClassGetter = _test_assertGuard(
  CustomGuardError,
)("ClassGetter")<ClassGetter>(ClassGetter)((input) =>
  typia.assertGuard<ClassGetter>(input, (p) => new CustomGuardError(p)),
);
