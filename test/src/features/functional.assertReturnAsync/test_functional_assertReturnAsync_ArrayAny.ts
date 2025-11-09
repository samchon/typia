import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayAny } from "../../structures/ArrayAny";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ArrayAny = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "ArrayAny"
)(ArrayAny)(
  (p: (input: ArrayAny) => Promise<ArrayAny>) =>
    typia.functional.assertReturn(p),
)