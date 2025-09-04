import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_assertFunctionAsync_SetSimple =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("SetSimple")(
      SetSimple,
    )((p: (input: SetSimple) => Promise<SetSimple>) =>
      typia.functional.assertFunction(p),
    );
