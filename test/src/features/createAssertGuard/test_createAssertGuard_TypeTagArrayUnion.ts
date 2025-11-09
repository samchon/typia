import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_createAssertGuard_TypeTagArrayUnion = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )(typia.createAssertGuard<TypeTagArrayUnion>());
