import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_validateFunction_TypeTagTuple = (): void => _test_functional_validateFunction(
  "TypeTagTuple"
)(TypeTagTuple)(
  (p: (input: TypeTagTuple) => TypeTagTuple) => typia.functional.validateFunction(p),
)