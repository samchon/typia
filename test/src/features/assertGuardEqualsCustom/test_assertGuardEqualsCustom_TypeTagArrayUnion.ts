import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_assertGuardEqualsCustom_TypeTagArrayUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.assertGuardEquals<TypeTagArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
