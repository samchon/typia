import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicNever } from "../../structures/DynamicNever";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_DynamicNever =
  _test_functional_assertReturnAsync(TypeGuardError)("DynamicNever")(
    DynamicNever,
  )((p: (input: DynamicNever) => Promise<DynamicNever>) =>
    typia.functional.assertReturn(p),
  );
