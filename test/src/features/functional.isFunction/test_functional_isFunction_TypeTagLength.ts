import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_isFunction_TypeTagLength = (): void => _test_functional_isFunction(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => TypeTagLength) => typia.functional.isFunction(p),
)