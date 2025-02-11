import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_assertGuardCustom_ArrayRepeatedUnion = _test_assertGuard(
  CustomGuardError,
)("ArrayRepeatedUnion")<ArrayRepeatedUnion>(ArrayRepeatedUnion)((input) =>
  typia.assertGuard<ArrayRepeatedUnion>(input, (p) => new CustomGuardError(p)),
);
