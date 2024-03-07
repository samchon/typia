import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TypeTagRangeBigInt =
  _test_assertGuardEquals(TypeGuardError)(
    "TypeTagRangeBigInt",
  )<TypeTagRangeBigInt>(TypeTagRangeBigInt)(
    typia.createAssertGuardEquals<TypeTagRangeBigInt>(),
  );
