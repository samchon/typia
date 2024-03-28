import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createAssertEquals_TypeTagBigInt = _test_assertEquals(
  TypeGuardError,
)("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)(
  typia.createAssertEquals<TypeTagBigInt>(),
);
