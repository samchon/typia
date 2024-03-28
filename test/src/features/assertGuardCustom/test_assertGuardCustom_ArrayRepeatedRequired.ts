import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_assertGuardCustom_ArrayRepeatedRequired = _test_assertGuard(
  CustomGuardError,
)("ArrayRepeatedRequired")<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
  (input) =>
    typia.assertGuard<ArrayRepeatedRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
