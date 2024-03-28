import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertReturnAsyncCustom_DynamicConstant =
  _test_functional_assertReturnAsync(CustomGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
