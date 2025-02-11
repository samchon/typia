import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { NativeSimple } from "../../structures/NativeSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_NativeSimple = _test_functional_assertReturnAsync(CustomGuardError)(
  "NativeSimple"
)(NativeSimple)(
  (p: (input: NativeSimple) => Promise<NativeSimple>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)