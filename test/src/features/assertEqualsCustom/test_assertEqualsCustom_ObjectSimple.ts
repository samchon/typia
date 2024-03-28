import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assertEqualsCustom_ObjectSimple = _test_assertEquals(
  CustomGuardError,
)("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
  typia.assertEquals<ObjectSimple>(input, (p) => new CustomGuardError(p)),
);
