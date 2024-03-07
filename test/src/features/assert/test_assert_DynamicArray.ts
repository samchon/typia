import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicArray } from "../../structures/DynamicArray";

import { TypeGuardError } from "typia";

export const test_assert_DynamicArray = _test_assert(TypeGuardError)(
  "DynamicArray",
)<DynamicArray>(DynamicArray)((input) => typia.assert<DynamicArray>(input));
