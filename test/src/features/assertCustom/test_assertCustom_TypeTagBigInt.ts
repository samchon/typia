import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagBigInt = _test_assert(CustomGuardError)(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input) =>
  typia.assert<TypeTagBigInt>(input, (p) => new CustomGuardError(p)),
);
