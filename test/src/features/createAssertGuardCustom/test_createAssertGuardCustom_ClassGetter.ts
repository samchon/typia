import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ClassGetter = _test_assertGuard(
  CustomGuardError,
)("ClassGetter")<ClassGetter>(ClassGetter)(
  typia.createAssertGuard<ClassGetter>((p) => new CustomGuardError(p)),
);
