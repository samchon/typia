import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createAssertGuardCustom_ObjectNullable = _test_assertGuard(
  CustomGuardError,
)("ObjectNullable")<ObjectNullable>(ObjectNullable)(
  typia.createAssertGuard<ObjectNullable>((p) => new CustomGuardError(p)),
);
