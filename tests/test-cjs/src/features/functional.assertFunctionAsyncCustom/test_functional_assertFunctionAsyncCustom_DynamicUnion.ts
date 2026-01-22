import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertFunctionAsyncCustom_DynamicUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("DynamicUnion")(
      DynamicUnion,
    )((p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
