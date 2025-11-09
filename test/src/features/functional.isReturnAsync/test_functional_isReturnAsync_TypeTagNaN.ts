import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_isReturnAsync_TypeTagNaN = (): Promise<void> => _test_functional_isReturnAsync(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.isReturn(p),
)