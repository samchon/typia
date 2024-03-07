import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { NativeSimple } from "../../structures/NativeSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_NativeSimple =
  _test_functional_assertFunctionAsync(TypeGuardError)("NativeSimple")(
    NativeSimple,
  )((p: (input: NativeSimple) => Promise<NativeSimple>) =>
    typia.functional.assertFunction(p),
  );
