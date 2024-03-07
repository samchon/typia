import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { NativeAlias } from "../../structures/NativeAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_NativeAlias =
  _test_functional_assertFunctionAsync(TypeGuardError)("NativeAlias")(
    NativeAlias,
  )((p: (input: NativeAlias) => Promise<NativeAlias>) =>
    typia.functional.assertFunction(p),
  );
