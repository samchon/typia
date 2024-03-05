import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssert_DynamicConstant = _test_assert(TypeGuardError)(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)(typia.createAssert<DynamicConstant>());
