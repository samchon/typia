import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_assertGuard_DynamicArray = (): void =>
  _test_assertGuard(TypeGuardError)("DynamicArray")<DynamicArray>(DynamicArray)(
    (input) => typia.assertGuard<DynamicArray>(input),
  );
