import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_assertGuardCustom_DynamicArray = _test_assertGuard(
  CustomGuardError,
)("DynamicArray")<DynamicArray>(DynamicArray)((input) =>
  typia.assertGuard<DynamicArray>(input, (p) => new CustomGuardError(p)),
);
