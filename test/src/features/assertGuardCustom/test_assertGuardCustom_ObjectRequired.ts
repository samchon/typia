import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectRequired = _test_assertGuard(
  CustomGuardError,
)("ObjectRequired")<ObjectRequired>(ObjectRequired)((input) =>
  typia.assertGuard<ObjectRequired>(input, (p) => new CustomGuardError(p)),
);
