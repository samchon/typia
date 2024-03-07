import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_TypeTagArray = _test_misc_assertClone(
  TypeGuardError,
)("TypeTagArray")<TypeTagArray>(TypeTagArray)(
  typia.misc.createAssertClone<TypeTagArray>(),
);
