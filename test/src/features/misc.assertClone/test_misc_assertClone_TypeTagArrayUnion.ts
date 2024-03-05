import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_assertClone_TypeTagArrayUnion = _test_misc_assertClone(
  TypeGuardError,
)("TypeTagArrayUnion")<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  typia.misc.assertClone<TypeTagArrayUnion>(input),
);
