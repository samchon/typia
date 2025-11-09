import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ArrayRecursiveUnionExplicit = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "ArrayRecursiveUnionExplicit"
)(ArrayRecursiveUnionExplicit)(
  (p: (input: ArrayRecursiveUnionExplicit) => Promise<ArrayRecursiveUnionExplicit>) =>
    typia.functional.assertEqualsReturn(p),
)