import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_isReturnAsync_TypeTagType = _test_functional_isReturnAsync(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.isReturn(p),
)