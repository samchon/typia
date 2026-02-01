import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_validateReturnAsync_TypeTagNaN = (): Promise<void> => _test_functional_validateReturnAsync(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.validateReturn(p),
)