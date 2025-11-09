import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_validateReturnAsync_DynamicTag =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("DynamicTag")(DynamicTag)(
      (p: (input: DynamicTag) => Promise<DynamicTag>) =>
        typia.functional.validateReturn(p),
    );
