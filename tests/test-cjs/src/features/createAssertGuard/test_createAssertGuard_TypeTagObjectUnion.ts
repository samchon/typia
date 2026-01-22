import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createAssertGuard_TypeTagObjectUnion = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )(typia.createAssertGuard<TypeTagObjectUnion>());
