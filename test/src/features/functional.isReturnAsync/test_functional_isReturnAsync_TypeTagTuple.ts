import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_isReturnAsync_TypeTagTuple = _test_functional_isReturnAsync(
  "TypeTagTuple"
)(TypeTagTuple)(
  (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.isReturn(p),
)