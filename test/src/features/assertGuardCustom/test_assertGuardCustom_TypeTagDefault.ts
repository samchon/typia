import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_assertGuardCustom_TypeTagDefault = _test_assertGuard(
  CustomGuardError,
)("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)((input) =>
  typia.assertGuard<TypeTagDefault>(input, (p) => new CustomGuardError(p)),
);
