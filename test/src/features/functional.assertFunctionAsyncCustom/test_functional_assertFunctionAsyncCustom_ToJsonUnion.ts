import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertFunctionAsyncCustom_ToJsonUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("ToJsonUnion")(
      ToJsonUnion,
    )((p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
