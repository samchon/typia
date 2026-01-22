import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_createAssertCustom_TypeTagRangeBigInt = (): void =>
  _test_assert(CustomGuardError)("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
    TypeTagRangeBigInt,
  )(typia.createAssert<TypeTagRangeBigInt>((p) => new CustomGuardError(p)));
