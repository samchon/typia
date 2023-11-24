import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_assert_DynamicConstant = _test_assert(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)((input) =>
  typia.assert<DynamicConstant>(input),
);
