import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_createAssertClone_TypeTagArrayUnion =
  _test_misc_assertClone("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )(typia.misc.createAssertClone<TypeTagArrayUnion>());
