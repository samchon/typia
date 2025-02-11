import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_assertGuardEqualsCustom_ToJsonTuple = _test_assertGuardEquals(
  CustomGuardError,
)("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)((input) =>
  typia.assertGuardEquals<ToJsonTuple>(input, (p) => new CustomGuardError(p)),
);
