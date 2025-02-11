import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_assertReturnAsyncCustom_NativeUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("NativeUnion")(
    NativeUnion,
  )((p: (input: NativeUnion) => Promise<NativeUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
