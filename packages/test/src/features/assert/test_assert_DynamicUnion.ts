import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_assert_DynamicUnion = _test_assert(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) => typia.assert<DynamicUnion>(input));
