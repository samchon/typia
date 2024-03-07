import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectInternal = _test_assertGuard(
  CustomGuardError,
)("ObjectInternal")<ObjectInternal>(ObjectInternal)((input) =>
  typia.assertGuard<ObjectInternal>(input, (p) => new CustomGuardError(p)),
);
