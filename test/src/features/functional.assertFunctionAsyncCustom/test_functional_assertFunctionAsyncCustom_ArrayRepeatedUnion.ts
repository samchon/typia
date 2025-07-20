import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_assertFunctionAsyncCustom_ArrayRepeatedUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ArrayRepeatedUnion",
    )(ArrayRepeatedUnion)(
      (p: (input: ArrayRepeatedUnion) => Promise<ArrayRepeatedUnion>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
