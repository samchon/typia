import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_assertReturnAsync_DynamicUndefined =
  _test_functional_assertReturnAsync(TypeGuardError)("DynamicUndefined")(
    DynamicUndefined,
  )((p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
    typia.functional.assertReturn(p),
  );
