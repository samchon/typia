import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicArray } from "../../structures/DynamicArray";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_DynamicArray = _test_functional_assertReturn(TypeGuardError)(
  "DynamicArray"
)(DynamicArray)(
  (p: (input: DynamicArray) => DynamicArray) => typia.functional.assertReturn(p),
)