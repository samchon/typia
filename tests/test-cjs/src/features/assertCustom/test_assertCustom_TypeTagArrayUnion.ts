import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_assertCustom_TypeTagArrayUnion = (): void =>
  _test_assert(CustomGuardError)("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )((input) =>
    typia.assert<TypeTagArrayUnion>(input, (p) => new CustomGuardError(p)),
  );
