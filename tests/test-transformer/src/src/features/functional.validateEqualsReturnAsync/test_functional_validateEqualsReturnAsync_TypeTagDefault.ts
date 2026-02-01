import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_validateEqualsReturnAsync_TypeTagDefault = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.validateEqualsReturn(p),
)