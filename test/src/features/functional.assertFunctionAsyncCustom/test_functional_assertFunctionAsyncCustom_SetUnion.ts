import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_assertFunctionAsyncCustom_SetUnion =
  _test_functional_assertFunctionAsync(CustomGuardError)("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => Promise<SetUnion>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
