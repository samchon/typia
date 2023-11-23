import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_assertGuard_TypeTagArrayUnion = _test_assertGuard(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  typia.assertGuard<TypeTagArrayUnion>(input),
);
