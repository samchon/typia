import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_assertFunctionAsyncCustom_NativeSimple =
  _test_functional_assertFunctionAsync(CustomGuardError)("NativeSimple")(
    NativeSimple,
  )((p: (input: NativeSimple) => Promise<NativeSimple>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
