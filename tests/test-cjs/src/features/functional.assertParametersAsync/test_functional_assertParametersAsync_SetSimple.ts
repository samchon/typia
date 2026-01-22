import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_assertParametersAsync_SetSimple =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("SetSimple")(
      SetSimple,
    )((p: (input: SetSimple) => Promise<SetSimple>) =>
      typia.functional.assertParameters(p),
    );
