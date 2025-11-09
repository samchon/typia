import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_createAssertClone_TypeTagCustom = (): void =>
  _test_misc_assertClone(TypeGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )(typia.misc.createAssertClone<TypeTagCustom>());
