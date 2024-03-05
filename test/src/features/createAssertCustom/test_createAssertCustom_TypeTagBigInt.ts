import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createAssertCustom_TypeTagBigInt = _test_assert(
  CustomGuardError,
)("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)(
  typia.createAssert<TypeTagBigInt>((p) => new CustomGuardError(p)),
);
