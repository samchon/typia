import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ToJsonArray =
  _test_functional_assertReturnAsync(TypeGuardError)("ToJsonArray")(
    ToJsonArray,
  )((p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
    typia.functional.assertReturn(p),
  );
