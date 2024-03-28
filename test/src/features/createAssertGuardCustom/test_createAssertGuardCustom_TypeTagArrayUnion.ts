import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createAssertGuardCustom_TypeTagArrayUnion = _test_assertGuard(
  CustomGuardError,
)("TypeTagArrayUnion")<TypeTagArrayUnion>(TypeTagArrayUnion)(
  typia.createAssertGuard<TypeTagArrayUnion>((p) => new CustomGuardError(p)),
);
