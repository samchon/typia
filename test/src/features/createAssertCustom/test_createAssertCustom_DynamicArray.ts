import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicArray } from "../../structures/DynamicArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_DynamicArray = _test_assert(
  CustomGuardError,
)("DynamicArray")<DynamicArray>(DynamicArray)(
  typia.createAssert<DynamicArray>((p) => new CustomGuardError(p)),
);
