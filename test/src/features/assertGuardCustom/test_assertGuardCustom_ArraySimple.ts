import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_assertGuardCustom_ArraySimple = _test_assertGuard(
  CustomGuardError,
)("ArraySimple")<ArraySimple>(ArraySimple)((input) =>
  typia.assertGuard<ArraySimple>(input, (p) => new CustomGuardError(p)),
);
