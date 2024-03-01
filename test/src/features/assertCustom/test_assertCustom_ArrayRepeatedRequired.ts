import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_assertCustom_ArrayRepeatedRequired = _test_assert(
  CustomGuardError,
)("ArrayRepeatedRequired")<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
  (input) =>
    typia.assert<ArrayRepeatedRequired>(input, (p) => new CustomGuardError(p)),
);
