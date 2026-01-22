import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_assertClone_TypeTagLength = (): void =>
  _test_misc_assertClone(TypeGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )((input) => typia.misc.assertClone<TypeTagLength>(input));
