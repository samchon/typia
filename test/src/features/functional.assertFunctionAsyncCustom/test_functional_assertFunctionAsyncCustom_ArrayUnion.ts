import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertFunctionAsyncCustom_ArrayUnion =
  _test_functional_assertFunctionAsync(CustomGuardError)("ArrayUnion")(
    ArrayUnion,
  )((p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
