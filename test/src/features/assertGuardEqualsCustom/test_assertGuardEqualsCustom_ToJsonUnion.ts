import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ToJsonUnion = _test_assertGuardEquals(
  CustomGuardError,
)("ToJsonUnion")<ToJsonUnion>(ToJsonUnion)((input) =>
  typia.assertGuardEquals<ToJsonUnion>(input, (p) => new CustomGuardError(p)),
);
