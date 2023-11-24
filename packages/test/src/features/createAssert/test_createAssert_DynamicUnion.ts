import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssert_DynamicUnion = _test_assert(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.createAssert<DynamicUnion>());
