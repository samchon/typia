import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_assertGuardEquals_TypeTagTuple = _test_assertGuardEquals(
  TypeGuardError,
)("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)((input) =>
  typia.assertGuardEquals<TypeTagTuple>(input),
);
