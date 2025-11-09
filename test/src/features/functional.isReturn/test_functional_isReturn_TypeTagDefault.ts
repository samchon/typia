import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_isReturn_TypeTagDefault = (): void => _test_functional_isReturn(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => TypeTagDefault) => typia.functional.isReturn(p),
)