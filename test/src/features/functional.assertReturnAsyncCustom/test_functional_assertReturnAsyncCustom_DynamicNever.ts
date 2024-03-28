import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_assertReturnAsyncCustom_DynamicNever =
  _test_functional_assertReturnAsync(CustomGuardError)("DynamicNever")(
    DynamicNever,
  )((p: (input: DynamicNever) => Promise<DynamicNever>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
