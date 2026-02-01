import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_validateEqualsFunctionAsync_ArraySimple = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.validateEqualsFunction(p),
)