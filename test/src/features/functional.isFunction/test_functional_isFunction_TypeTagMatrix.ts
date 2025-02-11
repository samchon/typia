import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_isFunction_TypeTagMatrix = _test_functional_isFunction(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => TypeTagMatrix) => typia.functional.isFunction(p),
)