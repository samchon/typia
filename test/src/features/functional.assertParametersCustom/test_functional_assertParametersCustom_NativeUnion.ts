import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_assertParametersCustom_NativeUnion =
  _test_functional_assertParameters(CustomGuardError)("NativeUnion")(
    NativeUnion,
  )((p: (input: NativeUnion) => NativeUnion) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
