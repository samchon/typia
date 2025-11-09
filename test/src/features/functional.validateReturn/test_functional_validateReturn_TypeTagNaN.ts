import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_validateReturn_TypeTagNaN = (): void => _test_functional_validateReturn(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => TypeTagNaN) => typia.functional.validateReturn(p),
)