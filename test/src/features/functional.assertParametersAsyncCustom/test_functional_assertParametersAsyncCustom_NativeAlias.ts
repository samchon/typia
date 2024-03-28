import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_assertParametersAsyncCustom_NativeAlias =
  _test_functional_assertParametersAsync(CustomGuardError)("NativeAlias")(
    NativeAlias,
  )((p: (input: NativeAlias) => Promise<NativeAlias>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
