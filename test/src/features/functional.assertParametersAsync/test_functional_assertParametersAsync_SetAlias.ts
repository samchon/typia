import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_assertParametersAsync_SetAlias =
  _test_functional_assertParametersAsync(TypeGuardError)("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => Promise<SetAlias>) =>
      typia.functional.assertParameters(p),
  );
