import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertEqualsReturnAsync_DynamicConstant =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("DynamicConstant")(
      DynamicConstant,
    )((p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      typia.functional.assertEqualsReturn(p),
    );
