import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_assertParametersAsyncCustom_NativeUnion =
  _test_functional_assertParametersAsync(CustomGuardError)("NativeUnion")(
    NativeUnion,
  )((p: (input: NativeUnion) => Promise<NativeUnion>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
