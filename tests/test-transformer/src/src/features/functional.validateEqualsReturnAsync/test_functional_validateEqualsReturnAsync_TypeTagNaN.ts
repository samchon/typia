import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_validateEqualsReturnAsync_TypeTagNaN = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.validateEqualsReturn(p),
)