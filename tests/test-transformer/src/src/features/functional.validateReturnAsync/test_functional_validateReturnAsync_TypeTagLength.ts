import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_validateReturnAsync_TypeTagLength = (): Promise<void> => _test_functional_validateReturnAsync(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.validateReturn(p),
)