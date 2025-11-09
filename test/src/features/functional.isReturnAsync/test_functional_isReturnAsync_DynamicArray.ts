import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_isReturnAsync_DynamicArray = (): Promise<void> =>
  _test_functional_isReturnAsync("DynamicArray")(DynamicArray)(
    (p: (input: DynamicArray) => Promise<DynamicArray>) =>
      typia.functional.isReturn(p),
  );
