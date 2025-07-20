import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_assertParametersAsync_NativeSimple =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("NativeSimple")(
      NativeSimple,
    )((p: (input: NativeSimple) => Promise<NativeSimple>) =>
      typia.functional.assertParameters(p),
    );
