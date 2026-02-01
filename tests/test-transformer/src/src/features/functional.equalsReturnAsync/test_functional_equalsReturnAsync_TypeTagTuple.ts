import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_equalsReturnAsync_TypeTagTuple = (): Promise<void> => _test_functional_equalsReturnAsync(
  "TypeTagTuple"
)(TypeTagTuple)(
  (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.equalsReturn(p),
)