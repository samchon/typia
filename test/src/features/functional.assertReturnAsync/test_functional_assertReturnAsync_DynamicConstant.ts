import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertReturnAsync_DynamicConstant =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("DynamicConstant")(
      DynamicConstant,
    )((p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
      typia.functional.assertReturn(p),
    );
