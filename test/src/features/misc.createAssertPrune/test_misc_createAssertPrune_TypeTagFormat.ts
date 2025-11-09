import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_createAssertPrune_TypeTagFormat = (): void =>
  _test_misc_assertPrune(TypeGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )(typia.misc.createAssertPrune<TypeTagFormat>());
