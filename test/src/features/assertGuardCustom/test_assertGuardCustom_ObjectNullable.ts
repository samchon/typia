import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_assertGuardCustom_ObjectNullable = _test_assertGuard(
  CustomGuardError,
)("ObjectNullable")<ObjectNullable>(ObjectNullable)((input) =>
  typia.assertGuard<ObjectNullable>(input, (p) => new CustomGuardError(p)),
);
