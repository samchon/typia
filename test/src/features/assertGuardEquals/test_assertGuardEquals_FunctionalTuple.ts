import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_assertGuardEquals_FunctionalTuple = _test_assertGuardEquals(
  TypeGuardError,
)("FunctionalTuple")<FunctionalTuple>(FunctionalTuple)((input) =>
  typia.assertGuardEquals<FunctionalTuple>(input),
);
