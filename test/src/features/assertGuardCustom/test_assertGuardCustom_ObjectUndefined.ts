import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_assertGuardCustom_ObjectUndefined = _test_assertGuard(
  CustomGuardError,
)("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)((input) =>
  typia.assertGuard<ObjectUndefined>(input, (p) => new CustomGuardError(p)),
);
