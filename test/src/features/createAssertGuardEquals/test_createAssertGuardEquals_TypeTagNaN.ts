import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_createAssertGuardEquals_TypeTagNaN = _test_assertGuardEquals(
  TypeGuardError,
)("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)(
  typia.createAssertGuardEquals<TypeTagNaN>(),
);
