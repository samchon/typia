import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ArrayHierarchical =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ArrayHierarchical",
  )(ArrayHierarchical)(
    (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
