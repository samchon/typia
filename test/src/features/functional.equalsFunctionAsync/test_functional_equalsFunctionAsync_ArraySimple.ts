import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_equalsFunctionAsync_ArraySimple = _test_functional_equalsFunctionAsync(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.equalsFunction(p),
)