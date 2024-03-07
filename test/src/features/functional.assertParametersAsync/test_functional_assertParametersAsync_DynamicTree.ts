import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicTree } from "../../structures/DynamicTree";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_DynamicTree =
  _test_functional_assertParametersAsync(TypeGuardError)("DynamicTree")(
    DynamicTree,
  )((p: (input: DynamicTree) => Promise<DynamicTree>) =>
    typia.functional.assertParameters(p),
  );
