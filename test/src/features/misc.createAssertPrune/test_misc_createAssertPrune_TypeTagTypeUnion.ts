import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TypeTagTypeUnion =
  _test_misc_assertPrune(TypeGuardError)("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )(typia.misc.createAssertPrune<TypeTagTypeUnion>());
