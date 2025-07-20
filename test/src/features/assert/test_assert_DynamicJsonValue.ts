import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_assert_DynamicJsonValue = (): void =>
  _test_assert(TypeGuardError)("DynamicJsonValue")<DynamicJsonValue>(
    DynamicJsonValue,
  )((input) => typia.assert<DynamicJsonValue>(input));
