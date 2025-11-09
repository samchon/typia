import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ArrayRecursiveUnionExplicitPointer = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "ArrayRecursiveUnionExplicitPointer"
)(ArrayRecursiveUnionExplicitPointer)(
  (p: (input: ArrayRecursiveUnionExplicitPointer) => Promise<ArrayRecursiveUnionExplicitPointer>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)