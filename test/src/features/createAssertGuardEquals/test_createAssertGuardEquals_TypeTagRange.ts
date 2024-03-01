import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_createAssertGuardEquals_TypeTagRange =
  _test_assertGuardEquals(TypeGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )(typia.createAssertGuardEquals<TypeTagRange>());
