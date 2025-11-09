import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_assertFunctionAsync_SetAlias = (): Promise<void> =>
  _test_functional_assertFunctionAsync(TypeGuardError)("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => Promise<SetAlias>) =>
      typia.functional.assertFunction(p),
  );
