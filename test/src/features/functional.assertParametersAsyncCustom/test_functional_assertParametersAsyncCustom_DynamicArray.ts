import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_assertParametersAsyncCustom_DynamicArray =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("DynamicArray")(
      DynamicArray,
    )((p: (input: DynamicArray) => Promise<DynamicArray>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
