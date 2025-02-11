import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_assertGuardCustom_TypeTagCustom = _test_assertGuard(
  CustomGuardError,
)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.assertGuard<TypeTagCustom>(input, (p) => new CustomGuardError(p)),
);
