import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_assertEqualsCustom_TypeTagArrayUnion = _test_assertEquals(
  CustomGuardError,
)("TypeTagArrayUnion")<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  typia.assertEquals<TypeTagArrayUnion>(input, (p) => new CustomGuardError(p)),
);
