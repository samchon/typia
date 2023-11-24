import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_createIsClone_TypeTagArrayUnion = _test_misc_isClone(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)(
  typia.misc.createIsClone<TypeTagArrayUnion>(),
);
