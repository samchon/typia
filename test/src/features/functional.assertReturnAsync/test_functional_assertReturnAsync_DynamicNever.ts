import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_assertReturnAsync_DynamicNever =
  _test_functional_assertReturnAsync(TypeGuardError)("DynamicNever")(
    DynamicNever,
  )((p: (input: DynamicNever) => Promise<DynamicNever>) =>
    typia.functional.assertReturn(p),
  );
