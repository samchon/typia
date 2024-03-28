import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_createAssertCustom_TypeTagTypeBigInt = _test_assert(
  CustomGuardError,
)("TypeTagTypeBigInt")<TypeTagTypeBigInt>(TypeTagTypeBigInt)(
  typia.createAssert<TypeTagTypeBigInt>((p) => new CustomGuardError(p)),
);
