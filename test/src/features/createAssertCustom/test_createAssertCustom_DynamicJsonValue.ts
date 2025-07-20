import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createAssertCustom_DynamicJsonValue = (): void =>
  _test_assert(CustomGuardError)("DynamicJsonValue")<DynamicJsonValue>(
    DynamicJsonValue,
  )(typia.createAssert<DynamicJsonValue>((p) => new CustomGuardError(p)));
