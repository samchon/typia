import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_equalsFunctionAsync_TypeTagTuple = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "TypeTagTuple"
)(TypeTagTuple)(
  (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.equalsFunction(p),
)