import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_assertParametersAsync_DynamicTree =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("DynamicTree")(
      DynamicTree,
    )((p: (input: DynamicTree) => Promise<DynamicTree>) =>
      typia.functional.assertParameters(p),
    );
