import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_FunctionalProperty = _test_assertGuard(
  TypeGuardError,
)("FunctionalProperty")<FunctionalProperty>(FunctionalProperty)(
  typia.createAssertGuard<FunctionalProperty>(),
);
