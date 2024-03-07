import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicArray } from "../../structures/DynamicArray";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_DynamicArray =
  _test_functional_assertReturnAsync(TypeGuardError)("DynamicArray")(
    DynamicArray,
  )((p: (input: DynamicArray) => Promise<DynamicArray>) =>
    typia.functional.assertReturn(p),
  );
