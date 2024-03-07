import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_TypeTagArrayUnion = _test_assertGuardEquals(
  TypeGuardError,
)("TypeTagArrayUnion")<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  typia.assertGuardEquals<TypeTagArrayUnion>(input),
);
