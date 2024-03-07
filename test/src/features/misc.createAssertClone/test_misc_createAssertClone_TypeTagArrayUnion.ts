import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_TypeTagArrayUnion =
  _test_misc_assertClone(TypeGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.misc.createAssertClone<TypeTagArrayUnion>(),
  );
