import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_validateParametersAsync_ArrayRepeatedUnion = (): Promise<void> => _test_functional_validateParametersAsync(
  "ArrayRepeatedUnion"
)(ArrayRepeatedUnion)(
  (p: (input: ArrayRepeatedUnion) => Promise<ArrayRepeatedUnion>) =>
    typia.functional.validateParameters(p),
)