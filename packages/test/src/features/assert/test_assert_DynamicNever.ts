import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_assert_DynamicNever = _test_assert(
  "DynamicNever",
)<DynamicNever>(DynamicNever)((input) => typia.assert<DynamicNever>(input));
