import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_assertParametersAsync_DynamicArray =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("DynamicArray")(
      DynamicArray,
    )((p: (input: DynamicArray) => Promise<DynamicArray>) =>
      typia.functional.assertParameters(p),
    );
