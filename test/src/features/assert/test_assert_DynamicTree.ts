import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_assert_DynamicTree = _test_assert(TypeGuardError)(
  "DynamicTree",
)<DynamicTree>(DynamicTree)((input) => typia.assert<DynamicTree>(input));
