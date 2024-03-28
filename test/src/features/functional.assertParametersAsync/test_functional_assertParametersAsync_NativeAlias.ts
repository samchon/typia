import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_functional_assertParametersAsync_NativeAlias =
  _test_functional_assertParametersAsync(TypeGuardError)("NativeAlias")(
    NativeAlias,
  )((p: (input: NativeAlias) => Promise<NativeAlias>) =>
    typia.functional.assertParameters(p),
  );
