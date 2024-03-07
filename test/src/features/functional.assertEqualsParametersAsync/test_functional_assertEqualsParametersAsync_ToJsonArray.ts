import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonArray } from "../../structures/ToJsonArray";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ToJsonArray =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("ToJsonArray")(
    ToJsonArray,
  )((p: (input: ToJsonArray) => Promise<ToJsonArray>) =>
    typia.functional.assertEqualsParameters(p),
  );
