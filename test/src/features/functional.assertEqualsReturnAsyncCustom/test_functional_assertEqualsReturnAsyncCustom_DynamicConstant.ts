import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertEqualsReturnAsyncCustom_DynamicConstant =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
