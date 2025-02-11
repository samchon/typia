import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_isReturnAsync_TypeTagDefault = _test_functional_isReturnAsync(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.isReturn(p),
)