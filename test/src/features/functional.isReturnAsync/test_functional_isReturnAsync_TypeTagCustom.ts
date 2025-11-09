import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_isReturnAsync_TypeTagCustom = (): Promise<void> => _test_functional_isReturnAsync(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.isReturn(p),
)