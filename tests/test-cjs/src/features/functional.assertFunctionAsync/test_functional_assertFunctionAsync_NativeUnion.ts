import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_assertFunctionAsync_NativeUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("NativeUnion")(
      NativeUnion,
    )((p: (input: NativeUnion) => Promise<NativeUnion>) =>
      typia.functional.assertFunction(p),
    );
