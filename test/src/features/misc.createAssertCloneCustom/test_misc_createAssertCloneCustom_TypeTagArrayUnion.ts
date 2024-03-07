import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_TypeTagArrayUnion =
  _test_misc_assertClone(CustomGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.misc.createAssertClone<TypeTagArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
