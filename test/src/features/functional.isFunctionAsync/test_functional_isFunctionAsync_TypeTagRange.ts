import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_isFunctionAsync_TypeTagRange = _test_functional_isFunctionAsync(
  "TypeTagRange"
)(TypeTagRange)(
  (p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
    typia.functional.isFunction(p),
)