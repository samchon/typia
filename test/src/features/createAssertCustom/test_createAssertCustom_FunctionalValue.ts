import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_FunctionalValue = _test_assert(
  CustomGuardError,
)("FunctionalValue")<FunctionalValue>(FunctionalValue)(
  typia.createAssert<FunctionalValue>((p) => new CustomGuardError(p)),
);
