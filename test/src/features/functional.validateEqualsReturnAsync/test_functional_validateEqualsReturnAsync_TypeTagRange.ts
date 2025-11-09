import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_validateEqualsReturnAsync_TypeTagRange = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "TypeTagRange"
)(TypeTagRange)(
  (p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
    typia.functional.validateEqualsReturn(p),
)