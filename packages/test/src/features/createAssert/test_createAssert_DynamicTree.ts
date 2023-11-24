import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createAssert_DynamicTree = _test_assert(
  "DynamicTree",
)<DynamicTree>(DynamicTree)(typia.createAssert<DynamicTree>());
