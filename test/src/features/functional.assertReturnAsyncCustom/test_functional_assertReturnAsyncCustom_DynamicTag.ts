import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertReturnAsyncCustom_DynamicTag =
  _test_functional_assertReturnAsync(CustomGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
