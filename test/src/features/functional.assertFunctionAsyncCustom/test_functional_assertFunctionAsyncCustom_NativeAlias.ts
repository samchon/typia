import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_assertFunctionAsyncCustom_NativeAlias =
  _test_functional_assertFunctionAsync(CustomGuardError)("NativeAlias")(
    NativeAlias,
  )((p: (input: NativeAlias) => Promise<NativeAlias>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
