import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertEqualsFunctionAsync_DynamicConstant =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "DynamicConstant",
    )(DynamicConstant)(
      (p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
        typia.functional.assertEqualsFunction(p),
    );
