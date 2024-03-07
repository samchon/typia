import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ArraySimple =
  _test_functional_assertFunctionAsync(CustomGuardError)("ArraySimple")(
    ArraySimple,
  )((p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
