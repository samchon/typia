import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_validateReturn_TypeTagRange = (): void => _test_functional_validateReturn(
  "TypeTagRange"
)(TypeTagRange)(
  (p: (input: TypeTagRange) => TypeTagRange) => typia.functional.validateReturn(p),
)