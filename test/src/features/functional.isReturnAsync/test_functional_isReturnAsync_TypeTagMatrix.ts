import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_isReturnAsync_TypeTagMatrix = _test_functional_isReturnAsync(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.isReturn(p),
)