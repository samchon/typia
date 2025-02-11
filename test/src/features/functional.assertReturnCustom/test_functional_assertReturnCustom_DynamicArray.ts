import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_assertReturnCustom_DynamicArray =
  _test_functional_assertReturn(CustomGuardError)("DynamicArray")(DynamicArray)(
    (p: (input: DynamicArray) => DynamicArray) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
