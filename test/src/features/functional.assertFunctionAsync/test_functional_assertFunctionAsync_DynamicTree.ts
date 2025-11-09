import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_assertFunctionAsync_DynamicTree =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("DynamicTree")(
      DynamicTree,
    )((p: (input: DynamicTree) => Promise<DynamicTree>) =>
      typia.functional.assertFunction(p),
    );
