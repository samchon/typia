import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_assertEquals_TypeTagArrayUnion = _test_assertEquals(
  TypeGuardError,
)("TypeTagArrayUnion")<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  typia.assertEquals<TypeTagArrayUnion>(input),
);
