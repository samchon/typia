import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_isFunctionAsync_TypeTagLength = _test_functional_isFunctionAsync(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.isFunction(p),
)