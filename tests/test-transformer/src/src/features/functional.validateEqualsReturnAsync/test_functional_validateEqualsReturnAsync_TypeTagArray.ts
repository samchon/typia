import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_validateEqualsReturnAsync_TypeTagArray = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.validateEqualsReturn(p),
)