import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_assertGuardCustom_ObjectHttpArray = _test_assertGuard(
  CustomGuardError,
)("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)((input) =>
  typia.assertGuard<ObjectHttpArray>(input, (p) => new CustomGuardError(p)),
);
