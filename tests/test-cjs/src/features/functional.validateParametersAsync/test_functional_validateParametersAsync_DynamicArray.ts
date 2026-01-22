import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_validateParametersAsync_DynamicArray =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("DynamicArray")(DynamicArray)(
      (p: (input: DynamicArray) => Promise<DynamicArray>) =>
        typia.functional.validateParameters(p),
    );
