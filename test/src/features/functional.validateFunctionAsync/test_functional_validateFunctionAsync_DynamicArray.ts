import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_validateFunctionAsync_DynamicArray =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("DynamicArray")(DynamicArray)(
      (p: (input: DynamicArray) => Promise<DynamicArray>) =>
        typia.functional.validateFunction(p),
    );
