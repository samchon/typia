import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertEqualsFunctionAsync_ToJsonArray =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ToJsonArray")(
    ToJsonArray,
  )((p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
    typia.functional.assertEqualsFunction(p),
  );
