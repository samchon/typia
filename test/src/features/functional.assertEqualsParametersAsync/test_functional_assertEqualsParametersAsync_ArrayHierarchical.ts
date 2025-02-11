import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_assertEqualsParametersAsync_ArrayHierarchical =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ArrayHierarchical",
  )(ArrayHierarchical)(
    (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
      typia.functional.assertEqualsParameters(p),
  );
