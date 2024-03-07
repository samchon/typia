import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { TypeGuardError } from "typia";

export const test_assertGuard_TypeTagTypeUnion = _test_assertGuard(
  TypeGuardError,
)("TypeTagTypeUnion")<TypeTagTypeUnion>(TypeTagTypeUnion)((input) =>
  typia.assertGuard<TypeTagTypeUnion>(input),
);
