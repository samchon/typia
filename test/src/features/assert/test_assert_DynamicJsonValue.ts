import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { TypeGuardError } from "typia";

export const test_assert_DynamicJsonValue = _test_assert(TypeGuardError)(
  "DynamicJsonValue",
)<DynamicJsonValue>(DynamicJsonValue)((input) =>
  typia.assert<DynamicJsonValue>(input),
);
