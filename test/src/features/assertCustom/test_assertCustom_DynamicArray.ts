import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicArray } from "../../structures/DynamicArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_DynamicArray = _test_assert(CustomGuardError)(
  "DynamicArray",
)<DynamicArray>(DynamicArray)((input) =>
  typia.assert<DynamicArray>(input, (p) => new CustomGuardError(p)),
);
