import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_validateEqualsReturnAsync_TypeTagInfinite = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
    typia.functional.validateEqualsReturn(p),
)