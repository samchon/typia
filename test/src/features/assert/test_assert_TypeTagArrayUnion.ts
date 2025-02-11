import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_assert_TypeTagArrayUnion = _test_assert(TypeGuardError)(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  typia.assert<TypeTagArrayUnion>(input),
);
