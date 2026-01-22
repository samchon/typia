import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_assertReturnAsyncCustom_DynamicUndefined =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("DynamicUndefined")(
      DynamicUndefined,
    )((p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
