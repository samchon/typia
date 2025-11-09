import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_validateFunctionAsync_SetAlias =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("SetAlias")(SetAlias)(
      (p: (input: SetAlias) => Promise<SetAlias>) =>
        typia.functional.validateFunction(p),
    );
