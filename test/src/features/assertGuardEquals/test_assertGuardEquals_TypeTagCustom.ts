import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_TypeTagCustom = _test_assertGuardEquals(
  TypeGuardError,
)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.assertGuardEquals<TypeTagCustom>(input),
);
