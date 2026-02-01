import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_validateEqualsReturnAsync_TypeTagTuple = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "TypeTagTuple"
)(TypeTagTuple)(
  (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.validateEqualsReturn(p),
)