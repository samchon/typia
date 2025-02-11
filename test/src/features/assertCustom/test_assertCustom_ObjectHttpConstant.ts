import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_assertCustom_ObjectHttpConstant = _test_assert(
  CustomGuardError,
)("ObjectHttpConstant")<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.assert<ObjectHttpConstant>(input, (p) => new CustomGuardError(p)),
);
