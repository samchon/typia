import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ArrayRecursiveUnionExplicitPointer = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ArrayRecursiveUnionExplicitPointer"
)(ArrayRecursiveUnionExplicitPointer)(
  (p: (input: ArrayRecursiveUnionExplicitPointer) => Promise<ArrayRecursiveUnionExplicitPointer>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)