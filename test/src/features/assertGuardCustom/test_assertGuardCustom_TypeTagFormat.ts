import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_assertGuardCustom_TypeTagFormat = _test_assertGuard(
  CustomGuardError,
)("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)((input) =>
  typia.assertGuard<TypeTagFormat>(input, (p) => new CustomGuardError(p)),
);
