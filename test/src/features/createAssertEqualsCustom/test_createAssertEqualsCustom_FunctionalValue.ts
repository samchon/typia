import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_createAssertEqualsCustom_FunctionalValue = _test_assertEquals(
  CustomGuardError,
)("FunctionalValue")<FunctionalValue>(FunctionalValue)(
  typia.createAssertEquals<FunctionalValue>((p) => new CustomGuardError(p)),
);
