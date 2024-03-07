import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_FunctionalValue = _test_assertEquals(
  TypeGuardError,
)("FunctionalValue")<FunctionalValue>(FunctionalValue)(
  typia.createAssertEquals<FunctionalValue>(),
);
