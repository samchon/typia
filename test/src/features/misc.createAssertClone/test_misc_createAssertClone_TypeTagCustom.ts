import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_TypeTagCustom = _test_misc_assertClone(
  TypeGuardError,
)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
  typia.misc.createAssertClone<TypeTagCustom>(),
);
