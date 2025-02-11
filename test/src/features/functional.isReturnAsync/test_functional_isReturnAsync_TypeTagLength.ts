import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_isReturnAsync_TypeTagLength = _test_functional_isReturnAsync(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.isReturn(p),
)