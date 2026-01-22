import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_assertGuardCustom_TypeTagArrayUnion = (): void =>
  _test_assertGuard(CustomGuardError)("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )((input) =>
    typia.assertGuard<TypeTagArrayUnion>(input, (p) => new CustomGuardError(p)),
  );
