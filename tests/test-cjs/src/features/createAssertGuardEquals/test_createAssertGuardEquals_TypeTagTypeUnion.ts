import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_createAssertGuardEquals_TypeTagTypeUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )(typia.createAssertGuardEquals<TypeTagTypeUnion>());
