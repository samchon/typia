import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_assertGuardEqualsCustom_ArrayUnion = _test_assertGuardEquals(
  CustomGuardError,
)("ArrayUnion")<ArrayUnion>(ArrayUnion)((input) =>
  typia.assertGuardEquals<ArrayUnion>(input, (p) => new CustomGuardError(p)),
);
