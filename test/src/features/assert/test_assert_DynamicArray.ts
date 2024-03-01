import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_assert_DynamicArray = _test_assert(TypeGuardError)(
  "DynamicArray",
)<DynamicArray>(DynamicArray)((input) => typia.assert<DynamicArray>(input));
