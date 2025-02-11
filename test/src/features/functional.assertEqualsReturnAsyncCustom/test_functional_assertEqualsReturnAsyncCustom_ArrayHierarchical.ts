import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_assertEqualsReturnAsyncCustom_ArrayHierarchical =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ArrayHierarchical",
  )(ArrayHierarchical)(
    (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
