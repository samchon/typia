import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ArrayRepeatedNullable = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "ArrayRepeatedNullable"
)(ArrayRepeatedNullable)(
  (p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
    typia.functional.assertReturn(p),
)