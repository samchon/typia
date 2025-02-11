import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createAssertGuard_FunctionalArray = _test_assertGuard(
  TypeGuardError,
)("FunctionalArray")<FunctionalArray>(FunctionalArray)(
  typia.createAssertGuard<FunctionalArray>(),
);
