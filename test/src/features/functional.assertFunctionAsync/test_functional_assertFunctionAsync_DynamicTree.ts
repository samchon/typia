import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicTree } from "../../structures/DynamicTree";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_DynamicTree =
  _test_functional_assertFunctionAsync(TypeGuardError)("DynamicTree")(
    DynamicTree,
  )((p: (input: DynamicTree) => Promise<DynamicTree>) =>
    typia.functional.assertFunction(p),
  );
