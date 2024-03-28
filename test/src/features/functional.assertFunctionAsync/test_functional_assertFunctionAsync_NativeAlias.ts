import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_assertFunctionAsync_NativeAlias =
  _test_functional_assertFunctionAsync(TypeGuardError)("NativeAlias")(
    NativeAlias,
  )((p: (input: NativeAlias) => Promise<NativeAlias>) =>
    typia.functional.assertFunction(p),
  );
