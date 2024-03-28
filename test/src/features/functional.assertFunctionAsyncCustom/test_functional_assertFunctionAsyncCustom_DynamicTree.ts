import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_assertFunctionAsyncCustom_DynamicTree =
  _test_functional_assertFunctionAsync(CustomGuardError)("DynamicTree")(
    DynamicTree,
  )((p: (input: DynamicTree) => Promise<DynamicTree>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
