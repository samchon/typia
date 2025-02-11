import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_createAssertGuardCustom_TypeTagTypeUnion = _test_assertGuard(
  CustomGuardError,
)("TypeTagTypeUnion")<TypeTagTypeUnion>(TypeTagTypeUnion)(
  typia.createAssertGuard<TypeTagTypeUnion>((p) => new CustomGuardError(p)),
);
