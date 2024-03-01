import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_createAssertGuard_TypeTagTypeUnion = _test_assertGuard(
  TypeGuardError,
)("TypeTagTypeUnion")<TypeTagTypeUnion>(TypeTagTypeUnion)(
  typia.createAssertGuard<TypeTagTypeUnion>(),
);
