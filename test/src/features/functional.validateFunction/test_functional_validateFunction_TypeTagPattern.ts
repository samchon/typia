import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_validateFunction_TypeTagPattern = (): void => _test_functional_validateFunction(
  "TypeTagPattern"
)(TypeTagPattern)(
  (p: (input: TypeTagPattern) => TypeTagPattern) => typia.functional.validateFunction(p),
)