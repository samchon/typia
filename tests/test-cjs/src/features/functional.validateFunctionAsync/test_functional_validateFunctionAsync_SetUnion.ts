import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_validateFunctionAsync_SetUnion =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("SetUnion")(SetUnion)(
      (p: (input: SetUnion) => Promise<SetUnion>) =>
        typia.functional.validateFunction(p),
    );
