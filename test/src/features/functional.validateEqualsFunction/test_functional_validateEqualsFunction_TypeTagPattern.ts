import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_validateEqualsFunction_TypeTagPattern = _test_functional_validateEqualsFunction(
  "TypeTagPattern"
)(TypeTagPattern)(
  (p: (input: TypeTagPattern) => TypeTagPattern) => typia.functional.validateEqualsFunction(p),
)