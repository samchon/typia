import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_equalsReturn_TypeTagRange = (): void => _test_functional_equalsReturn(
  "TypeTagRange"
)(TypeTagRange)(
  (p: (input: TypeTagRange) => TypeTagRange) => typia.functional.equalsReturn(p),
)