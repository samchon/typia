import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagArrayUnion = _test_assert(
  CustomGuardError,
)("TypeTagArrayUnion")<TypeTagArrayUnion>(TypeTagArrayUnion)(
  typia.createAssert<TypeTagArrayUnion>((p) => new CustomGuardError(p)),
);
