import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ArrayRecursiveUnionExplicit = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ArrayRecursiveUnionExplicit"
)(ArrayRecursiveUnionExplicit)(
  (p: (input: ArrayRecursiveUnionExplicit) => Promise<ArrayRecursiveUnionExplicit>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)