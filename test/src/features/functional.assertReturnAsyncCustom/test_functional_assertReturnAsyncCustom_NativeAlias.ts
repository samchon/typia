import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_assertReturnAsyncCustom_NativeAlias =
  _test_functional_assertReturnAsync(CustomGuardError)("NativeAlias")(
    NativeAlias,
  )((p: (input: NativeAlias) => Promise<NativeAlias>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
