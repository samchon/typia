import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTree } from "../../structures/DynamicTree";

import { TypeGuardError } from "typia";

export const test_assertGuard_DynamicTree = _test_assertGuard(TypeGuardError)(
  "DynamicTree",
)<DynamicTree>(DynamicTree)((input) => typia.assertGuard<DynamicTree>(input));
