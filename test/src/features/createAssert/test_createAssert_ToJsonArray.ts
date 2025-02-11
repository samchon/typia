import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createAssert_ToJsonArray = _test_assert(TypeGuardError)(
  "ToJsonArray",
)<ToJsonArray>(ToJsonArray)(typia.createAssert<ToJsonArray>());
