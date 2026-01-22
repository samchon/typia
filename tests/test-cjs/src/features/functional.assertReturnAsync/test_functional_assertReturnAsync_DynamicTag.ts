import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertReturnAsync_DynamicTag = (): Promise<void> =>
  _test_functional_assertReturnAsync(TypeGuardError)("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => Promise<DynamicTag>) =>
      typia.functional.assertReturn(p),
  );
