import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ArrayUnion = (): Promise<void> => _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "ArrayUnion"
)(ArrayUnion)(
  (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
    typia.functional.assertEqualsParameters(p),
)