import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_isReturnAsync_FunctionalValue = _test_functional_isReturnAsync(
  "FunctionalValue"
)(FunctionalValue)(
  (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.isReturn(p),
)