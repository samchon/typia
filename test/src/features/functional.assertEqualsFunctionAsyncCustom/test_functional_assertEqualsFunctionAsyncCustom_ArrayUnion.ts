import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertEqualsFunctionAsyncCustom_ArrayUnion =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ArrayUnion")(
    ArrayUnion,
  )((p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
