import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectUndefined = _test_assertEquals(
  CustomGuardError,
)("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)((input) =>
  typia.assertEquals<ObjectUndefined>(input, (p) => new CustomGuardError(p)),
);
