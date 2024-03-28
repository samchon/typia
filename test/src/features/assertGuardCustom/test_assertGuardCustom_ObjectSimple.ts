import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assertGuardCustom_ObjectSimple = _test_assertGuard(
  CustomGuardError,
)("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
  typia.assertGuard<ObjectSimple>(input, (p) => new CustomGuardError(p)),
);
