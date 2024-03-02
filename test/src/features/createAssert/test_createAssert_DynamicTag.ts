import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_createAssert_DynamicTag = _test_assert(TypeGuardError)(
  "DynamicTag",
)<DynamicTag>(DynamicTag)(typia.createAssert<DynamicTag>());
