import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_createAssertGuardEquals_TypeTagTypeBigInt =
  _test_assertGuardEquals("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )(typia.createAssertGuardEquals<TypeTagTypeBigInt>());
