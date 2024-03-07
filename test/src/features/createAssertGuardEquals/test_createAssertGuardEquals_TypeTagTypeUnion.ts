import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TypeTagTypeUnion =
  _test_assertGuardEquals(TypeGuardError)("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )(typia.createAssertGuardEquals<TypeTagTypeUnion>());
