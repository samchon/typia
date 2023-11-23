import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createAssert_UltimateUnion = _test_assert(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)(typia.createAssert<UltimateUnion>());
