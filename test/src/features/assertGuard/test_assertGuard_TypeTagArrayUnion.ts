import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_assertGuard_TypeTagArrayUnion = _test_assertGuard(
  TypeGuardError,
)("TypeTagArrayUnion")<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  typia.assertGuard<TypeTagArrayUnion>(input),
);
