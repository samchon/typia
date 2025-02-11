import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_assertGuardCustom_ObjectHttpConstant = _test_assertGuard(
  CustomGuardError,
)("ObjectHttpConstant")<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.assertGuard<ObjectHttpConstant>(input, (p) => new CustomGuardError(p)),
);
