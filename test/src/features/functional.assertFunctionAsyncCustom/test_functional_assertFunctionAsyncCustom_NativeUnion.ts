import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_assertFunctionAsyncCustom_NativeUnion =
  _test_functional_assertFunctionAsync(CustomGuardError)("NativeUnion")(
    NativeUnion,
  )((p: (input: NativeUnion) => Promise<NativeUnion>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
