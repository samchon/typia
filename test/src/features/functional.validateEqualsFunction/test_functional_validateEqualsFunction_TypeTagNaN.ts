import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_validateEqualsFunction_TypeTagNaN = _test_functional_validateEqualsFunction(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => TypeTagNaN) => typia.functional.validateEqualsFunction(p),
)