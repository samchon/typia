import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ArrayHierarchical = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)