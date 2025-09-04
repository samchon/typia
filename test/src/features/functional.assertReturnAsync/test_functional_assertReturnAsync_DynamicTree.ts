import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_assertReturnAsync_DynamicTree =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("DynamicTree")(
      DynamicTree,
    )((p: (input: DynamicTree) => Promise<DynamicTree>) =>
      typia.functional.assertReturn(p),
    );
