import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_assertGuardCustom_TypeTagObjectUnion = _test_assertGuard(
  CustomGuardError,
)("TypeTagObjectUnion")<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
  typia.assertGuard<TypeTagObjectUnion>(input, (p) => new CustomGuardError(p)),
);
