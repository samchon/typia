import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TypeTagRange = _test_assertGuard(
  CustomGuardError,
)("TypeTagRange")<TypeTagRange>(TypeTagRange)(
  typia.createAssertGuard<TypeTagRange>((p) => new CustomGuardError(p)),
);
