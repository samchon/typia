import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createAssertGuardEqualsCustom_TypeTagArrayUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.createAssertGuardEquals<TypeTagArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
