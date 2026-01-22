import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_assertGuard_DynamicTree = (): void =>
  _test_assertGuard(TypeGuardError)("DynamicTree")<DynamicTree>(DynamicTree)(
    (input) => typia.assertGuard<DynamicTree>(input),
  );
