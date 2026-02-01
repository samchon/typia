import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_isFunction_TypeTagRange = (): void => _test_functional_isFunction(
  "TypeTagRange"
)(TypeTagRange)(
  (p: (input: TypeTagRange) => TypeTagRange) => typia.functional.isFunction(p),
)