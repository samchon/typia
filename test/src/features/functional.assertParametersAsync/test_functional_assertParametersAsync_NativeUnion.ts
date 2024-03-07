import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { NativeUnion } from "../../structures/NativeUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_NativeUnion =
  _test_functional_assertParametersAsync(TypeGuardError)("NativeUnion")(
    NativeUnion,
  )((p: (input: NativeUnion) => Promise<NativeUnion>) =>
    typia.functional.assertParameters(p),
  );
