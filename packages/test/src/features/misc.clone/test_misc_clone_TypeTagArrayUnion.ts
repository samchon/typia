import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_clone_TypeTagArrayUnion = _test_misc_clone(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  typia.misc.clone<TypeTagArrayUnion>(input),
);
