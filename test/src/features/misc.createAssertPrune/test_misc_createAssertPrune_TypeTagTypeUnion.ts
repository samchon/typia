import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_misc_createAssertPrune_TypeTagTypeUnion = (): void =>
  _test_misc_assertPrune(TypeGuardError)("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )(typia.misc.createAssertPrune<TypeTagTypeUnion>());
