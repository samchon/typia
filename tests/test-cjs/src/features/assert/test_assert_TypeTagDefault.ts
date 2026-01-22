import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_assert_TypeTagDefault = (): void =>
  _test_assert(TypeGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )((input) => typia.assert<TypeTagDefault>(input));
