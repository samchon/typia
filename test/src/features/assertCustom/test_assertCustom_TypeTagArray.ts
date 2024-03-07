import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagArray = _test_assert(CustomGuardError)(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)((input) =>
  typia.assert<TypeTagArray>(input, (p) => new CustomGuardError(p)),
);
