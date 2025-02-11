import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_assertGuardCustom_ObjectHttpNullable = _test_assertGuard(
  CustomGuardError,
)("ObjectHttpNullable")<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  typia.assertGuard<ObjectHttpNullable>(input, (p) => new CustomGuardError(p)),
);
