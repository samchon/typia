import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ArrayRecursiveUnionExplicit = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "ArrayRecursiveUnionExplicit"
)(ArrayRecursiveUnionExplicit)(
  (p: (input: ArrayRecursiveUnionExplicit) => Promise<ArrayRecursiveUnionExplicit>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)