import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_createAssertClone_TypeTagPattern =
  _test_misc_assertClone(TypeGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )(typia.misc.createAssertClone<TypeTagPattern>());
