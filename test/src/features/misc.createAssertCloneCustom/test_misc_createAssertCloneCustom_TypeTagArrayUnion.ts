import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_misc_createAssertCloneCustom_TypeTagArrayUnion = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.misc.createAssertClone<TypeTagArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
