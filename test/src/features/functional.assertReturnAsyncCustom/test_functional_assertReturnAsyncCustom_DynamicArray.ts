import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_assertReturnAsyncCustom_DynamicArray =
  _test_functional_assertReturnAsync(CustomGuardError)("DynamicArray")(
    DynamicArray,
  )((p: (input: DynamicArray) => Promise<DynamicArray>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
