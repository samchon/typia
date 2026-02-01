import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_equalsFunction_TypeTagPattern = (): void => _test_functional_equalsFunction(
  "TypeTagPattern"
)(TypeTagPattern)(
  (p: (input: TypeTagPattern) => TypeTagPattern) => typia.functional.equalsFunction(p),
)