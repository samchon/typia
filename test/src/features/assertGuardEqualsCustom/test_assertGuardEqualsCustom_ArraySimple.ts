import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_assertGuardEqualsCustom_ArraySimple = _test_assertGuardEquals(
  CustomGuardError,
)("ArraySimple")<ArraySimple>(ArraySimple)((input) =>
  typia.assertGuardEquals<ArraySimple>(input, (p) => new CustomGuardError(p)),
);
