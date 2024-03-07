import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_FunctionalValue = _test_assertEquals(
  CustomGuardError,
)("FunctionalValue")<FunctionalValue>(FunctionalValue)((input) =>
  typia.assertEquals<FunctionalValue>(input, (p) => new CustomGuardError(p)),
);
