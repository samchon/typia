import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_assertClone_TypeTagArray = (): void =>
  _test_misc_assertClone(TypeGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )((input) => typia.misc.assertClone<TypeTagArray>(input));
