import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_functional_validateFunctionAsync_ArrayRepeatedUnionWithTuple = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ArrayRepeatedUnionWithTuple"
)(ArrayRepeatedUnionWithTuple)(
  (p: (input: ArrayRepeatedUnionWithTuple) => Promise<ArrayRepeatedUnionWithTuple>) =>
    typia.functional.validateFunction(p),
)