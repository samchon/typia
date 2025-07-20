import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_assertGuard_TypeTagFormat = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )((input) => typia.assertGuard<TypeTagFormat>(input));
