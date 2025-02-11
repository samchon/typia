import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_assertGuardCustom_TypeTagMatrix = _test_assertGuard(
  CustomGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.assertGuard<TypeTagMatrix>(input, (p) => new CustomGuardError(p)),
);
