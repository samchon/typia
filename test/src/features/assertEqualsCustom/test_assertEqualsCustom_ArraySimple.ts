import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_assertEqualsCustom_ArraySimple = _test_assertEquals(
  CustomGuardError,
)("ArraySimple")<ArraySimple>(ArraySimple)((input) =>
  typia.assertEquals<ArraySimple>(input, (p) => new CustomGuardError(p)),
);
