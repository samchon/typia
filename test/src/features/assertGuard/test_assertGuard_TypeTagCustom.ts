import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_assertGuard_TypeTagCustom = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )((input) => typia.assertGuard<TypeTagCustom>(input));
