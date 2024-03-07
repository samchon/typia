import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ArrayUnion = _test_assertGuard(
  CustomGuardError,
)("ArrayUnion")<ArrayUnion>(ArrayUnion)((input) =>
  typia.assertGuard<ArrayUnion>(input, (p) => new CustomGuardError(p)),
);
