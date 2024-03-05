import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_assertGuardCustom_TypeTagTuple = _test_assertGuard(
  CustomGuardError,
)("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)((input) =>
  typia.assertGuard<TypeTagTuple>(input, (p) => new CustomGuardError(p)),
);
