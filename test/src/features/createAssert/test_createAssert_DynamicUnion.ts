import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssert_DynamicUnion = _test_assert(TypeGuardError)(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.createAssert<DynamicUnion>());
