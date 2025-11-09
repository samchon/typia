import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertParametersAsyncCustom_ArraySimple =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ArraySimple")(
      ArraySimple,
    )((p: (input: ArraySimple) => Promise<ArraySimple>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
