import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_assertEqualsCustom_ObjectRequired = _test_assertEquals(
  CustomGuardError,
)("ObjectRequired")<ObjectRequired>(ObjectRequired)((input) =>
  typia.assertEquals<ObjectRequired>(input, (p) => new CustomGuardError(p)),
);
