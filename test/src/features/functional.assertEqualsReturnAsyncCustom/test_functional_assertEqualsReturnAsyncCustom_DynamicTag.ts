import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertEqualsReturnAsyncCustom_DynamicTag =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
