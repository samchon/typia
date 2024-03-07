import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_DynamicJsonValue = _test_assert(
  CustomGuardError,
)("DynamicJsonValue")<DynamicJsonValue>(DynamicJsonValue)((input) =>
  typia.assert<DynamicJsonValue>(input, (p) => new CustomGuardError(p)),
);
