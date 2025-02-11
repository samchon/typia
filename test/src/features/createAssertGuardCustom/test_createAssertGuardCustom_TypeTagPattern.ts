import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createAssertGuardCustom_TypeTagPattern = _test_assertGuard(
  CustomGuardError,
)("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)(
  typia.createAssertGuard<TypeTagPattern>((p) => new CustomGuardError(p)),
);
