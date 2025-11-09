import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_validateFunctionAsync_SetSimple =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("SetSimple")(SetSimple)(
      (p: (input: SetSimple) => Promise<SetSimple>) =>
        typia.functional.validateFunction(p),
    );
