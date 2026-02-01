import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_isFunction_TypeTagPattern = (): void => _test_functional_isFunction(
  "TypeTagPattern"
)(TypeTagPattern)(
  (p: (input: TypeTagPattern) => TypeTagPattern) => typia.functional.isFunction(p),
)