import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { NativeAlias } from "../../structures/NativeAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_NativeAlias =
  _test_functional_assertFunctionAsync(CustomGuardError)("NativeAlias")(
    NativeAlias,
  )((p: (input: NativeAlias) => Promise<NativeAlias>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
