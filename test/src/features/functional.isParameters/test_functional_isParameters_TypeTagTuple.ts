import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_isParameters_TypeTagTuple = _test_functional_isParameters(
  "TypeTagTuple"
)(TypeTagTuple)(
  (p: (input: TypeTagTuple) => TypeTagTuple) => typia.functional.isParameters(p),
)