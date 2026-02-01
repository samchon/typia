import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_isReturn_TypeTagLength = (): void => _test_functional_isReturn(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => TypeTagLength) => typia.functional.isReturn(p),
)