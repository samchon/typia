import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertFunctionAsync_DynamicConstant =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("DynamicConstant")(
      DynamicConstant,
    )((p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      typia.functional.assertFunction(p),
    );
