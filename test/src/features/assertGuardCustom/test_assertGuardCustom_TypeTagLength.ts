import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TypeTagLength = _test_assertGuard(
  CustomGuardError,
)("TypeTagLength")<TypeTagLength>(TypeTagLength)((input) =>
  typia.assertGuard<TypeTagLength>(input, (p) => new CustomGuardError(p)),
);
