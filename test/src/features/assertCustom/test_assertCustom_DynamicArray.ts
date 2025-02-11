import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_assertCustom_DynamicArray = _test_assert(CustomGuardError)(
  "DynamicArray",
)<DynamicArray>(DynamicArray)((input) =>
  typia.assert<DynamicArray>(input, (p) => new CustomGuardError(p)),
);
