import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertEqualsReturnAsync_DynamicTag =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertEqualsReturn(p),
  );
