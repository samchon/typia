import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_validateReturnAsync_DynamicNever =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("DynamicNever")(DynamicNever)(
      (p: (input: DynamicNever) => Promise<DynamicNever>) =>
        typia.functional.validateReturn(p),
    );
