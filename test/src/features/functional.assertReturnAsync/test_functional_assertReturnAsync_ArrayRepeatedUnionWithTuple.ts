import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ArrayRepeatedUnionWithTuple = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "ArrayRepeatedUnionWithTuple"
)(ArrayRepeatedUnionWithTuple)(
  (p: (input: ArrayRepeatedUnionWithTuple) => Promise<ArrayRepeatedUnionWithTuple>) =>
    typia.functional.assertReturn(p),
)